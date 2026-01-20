
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const UserSchema = new mongoose.Schema({
    phone: String,
    name: String,
    createdAt: Date
}, { strict: false });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        console.log("Connecting to DB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected.");

        const phones = ["8668903099", "+918668903099"];

        const users = await User.find({ phone: { $in: phones } }).sort({ createdAt: 1 });

        console.log(`Found ${users.length} users.`);
        users.forEach((u, i) => {
            console.log(`[${i}] ID: ${u._id}`);
            console.log(`    Name: ${u.name}`);
            console.log(`    Phone: '${u.phone}'`);
            console.log(`    CreatedAt: ${u.createdAt}`);
        });

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}
run();
