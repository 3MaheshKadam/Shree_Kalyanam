const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    price: Number,
    durationInDays: Number,
    features: [String],
    isActive: Boolean
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

async function checkAndSeedPlans() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const count = await Subscription.countDocuments();
        console.log(`Found ${count} subscription plans.`);

        if (count === 0) {
            console.log('Seeding default plans...');
            const plans = [
                {
                    name: 'Free',
                    price: 0,
                    durationInDays: 36500, // Forever
                    features: ['Create Profile', 'Browse Matches', 'Send Interest'],
                    isActive: true
                },
                {
                    name: 'Gold',
                    price: 2999,
                    durationInDays: 90,
                    features: ['All Free Features', 'View Full Profiles', 'Chat with Matches', 'Priority Support'],
                    isActive: true
                },
                {
                    name: 'Premium',
                    price: 4999,
                    durationInDays: 180,
                    features: ['All Gold Features', 'Relationship Manager', 'Profile Highlighter', 'Unlimited Chat'],
                    isActive: true
                }
            ];

            await Subscription.insertMany(plans);
            console.log('Seeded 3 plans successfully.');
        } else {
            const plans = await Subscription.find({});
            console.log('Existing plans:', plans.map(p => p.name));
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkAndSeedPlans();
