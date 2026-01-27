const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    price: Number,
    durationInDays: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { strict: false, timestamps: true });

const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);

async function run() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        const allPlans = await Subscription.find({});
        console.log(`Total Subscription Documents: ${allPlans.length}`);

        // Group by name
        const grouped = {};
        allPlans.forEach(p => {
            if (!grouped[p.name]) grouped[p.name] = [];
            grouped[p.name].push(p);
        });

        const preserveIds = [];
        const deleteIds = [];

        for (const planName of Object.keys(grouped)) {
            const docs = grouped[planName];

            // Log duplicates
            if (docs.length > 1) {
                console.log(`Found ${docs.length} copies of '${planName}'. Keeping the oldest/master.`);
            }

            // Strategy: Keep the one WITHOUT a userId (Template). 
            // If all have userId (bad data), keep the oldest.
            // If multiple have no userId, keep the oldest.

            let master = docs.find(d => !d.userId); // Prefer template
            if (!master) {
                // Sort by creation date
                docs.sort((a, b) => a.createdAt - b.createdAt);
                master = docs[0];
            }

            preserveIds.push(master._id);

            // Mark others for deletion
            docs.forEach(d => {
                if (d._id.toString() !== master._id.toString()) {
                    deleteIds.push(d._id);
                }
            });
        }

        console.log(`\nActions:`);
        console.log(`Keeping: ${preserveIds.length} plans`);
        console.log(`Deleting: ${deleteIds.length} duplicates`);

        if (deleteIds.length > 0) {
            const res = await Subscription.deleteMany({ _id: { $in: deleteIds } });
            console.log(`\n✅ Deleted ${res.deletedCount} documents.`);
        } else {
            console.log("\n✅ No duplicates found. Database is clean.");
        }

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
