// Script to enable subscription for a user (for testing purposes)
// Usage: node scripts/enable-subscription.js <userId> <plan>
// Example: node scripts/enable-subscription.js 698ad99aba678b3c71ee2e15 silver

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../.env') });

// Import User model
const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', UserSchema);

async function enableSubscription(userId, plan = 'silver') {
    try {
        // Connect to MongoDB
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI not found in environment variables');
        }

        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Find user
        const user = await User.findById(userId);
        if (!user) {
            console.error(`User with ID ${userId} not found`);
            process.exit(1);
        }

        console.log(`Found user: ${user.name || user.phone}`);

        // Calculate expiration date (30 days from now)
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);

        // Update subscription
        user.subscription = {
            plan: plan,
            isSubscribed: true,
            expiresAt: expiresAt,
            transactionId: `TEST_${Date.now()}`,
        };

        await user.save();

        console.log('\n✅ Subscription enabled successfully!');
        console.log(`Plan: ${plan}`);
        console.log(`Expires: ${expiresAt.toLocaleDateString()}`);
        console.log(`User can now access all features`);

        process.exit(0);
    } catch (error) {
        console.error('Error enabling subscription:', error);
        process.exit(1);
    }
}

// Get command line arguments
const userId = process.argv[2];
const plan = process.argv[3] || 'silver';

if (!userId) {
    console.error('Usage: node enable-subscription.js <userId> [plan]');
    console.error('Example: node enable-subscription.js 698ad99aba678b3c71ee2e15 silver');
    process.exit(1);
}

enableSubscription(userId, plan);
