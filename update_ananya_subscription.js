const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({
    phone: String,
    name: String,
    subscription: {
        plan: String,
        isSubscribed: Boolean,
        expiresAt: Date,
        subscriptionId: mongoose.Schema.Types.ObjectId
    }
}, { strict: false });

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    price: Number,
    durationInDays: Number
}, { strict: false });

const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);

async function run() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        const targetPhone = "+919876543217";
        const targetPlanName = "Silver Plan"; // Matching seed data

        // 1. Find User
        const user = await User.findOne({ phone: targetPhone });
        if (!user) {
            console.log(`❌ User with phone ${targetPhone} not found.`);
            return;
        }
        console.log(`✅ Found user: ${user.name} (${user._id})`);

        // 2. Find Plan Details
        let plan = await Subscription.findOne({ name: targetPlanName });
        let duration = 30; // Default fallback
        let planId = null;

        if (plan) {
            console.log(`✅ Found plan: ${plan.name} (${plan._id}), Duration: ${plan.durationInDays} days`);
            duration = plan.durationInDays;
            planId = plan._id;
        } else {
            console.log(`⚠️ Plan '${targetPlanName}' not found in Subscription collection. Using default configuration (365 days).`);
            duration = 365;
        }

        // 3. Calculate Expiry
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + duration);

        // 4. Update User
        user.subscription = {
            plan: targetPlanName,
            isSubscribed: true,
            expiresAt: expiresAt,
            subscriptionId: planId
        };

        // Mark modified if needed (mongoose sometimes needs this for mixed/nested updates if schema was strict, keeping it safe)
        user.markModified('subscription');

        await user.save();
        console.log(`🎉 Successfully updated subscription for ${user.name}`);
        console.log(`   - Plan: ${user.subscription.plan}`);
        console.log(`   - Status: ${user.subscription.isSubscribed ? 'Subscribed' : 'Not Subscribed'}`);
        console.log(`   - Expires: ${user.subscription.expiresAt}`);

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
