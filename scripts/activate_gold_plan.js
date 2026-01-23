const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://maheshkadam9298_db_user:mahesh@cluster0.tbxlg8f.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

const targetPhone = '9689420767'; // User provided number
const targetPlanName = 'Gold';     // Desired plan

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db();

        // 1. Find User
        // Try with and without +91 just in case, though schema says +91
        const user = await db.collection('users').findOne({
            $or: [
                { phone: targetPhone },
                { phone: `+91${targetPhone}` }
            ]
        });

        if (!user) {
            console.error(`User with phone ${targetPhone} not found!`);
            return;
        }
        console.log(`Found User: ${user.name} (${user.phone})`);

        // 2. Find Plan
        const plan = await db.collection('subscriptions').findOne({ name: { $regex: new RegExp(targetPlanName, 'i') } });

        if (!plan) {
            console.error(`Plan "${targetPlanName}" not found!`);
            return;
        }
        console.log(`Found Plan: ${plan.name} (Duration: ${plan.durationInDays} days)`);

        // 3. Update User Subscription
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + plan.durationInDays);

        const subscriptionData = {
            plan: plan.name,
            expiresAt: expiresAt,
            transactionId: 'MANUAL_ACTIVATION_' + Date.now(),
            subscriptionId: plan._id,
            isSubscribed: true
        };

        const result = await db.collection('users').updateOne(
            { _id: user._id },
            { $set: { subscription: subscriptionData } }
        );

        console.log(`Updated user subscription. Modified count: ${result.modifiedCount}`);
        console.log('New Subscription:', subscriptionData);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
