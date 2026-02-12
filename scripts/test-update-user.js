
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable inside .env');
    process.exit(1);
}

// Minimal User Schema with Expectations
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    expectedCaste: { type: String, default: null },
    preferredCity: { type: String, default: null },
}, { strict: false }); // Allow other fields

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function testUpdate() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Find a user
        const user = await User.findOne({});
        if (!user) {
            console.log('No user found');
            return;
        }

        console.log('Updating user:', user._id);
        console.log('Current expectedCaste:', user.expectedCaste);

        // Update
        const result = await User.findByIdAndUpdate(
            user._id,
            {
                expectedCaste: 'TestCaste',
                preferredCity: 'TestCity'
            },
            { new: true }
        );

        console.log('Updated user:');
        console.log('expectedCaste:', result.expectedCaste);
        console.log('preferredCity:', result.preferredCity);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

testUpdate();
