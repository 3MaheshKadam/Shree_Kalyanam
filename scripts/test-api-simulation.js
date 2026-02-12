
const { PUT } = require('../src/app/api/users/update/route.js');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

// Mock Request object
class MockRequest {
    constructor(body) {
        this.body = body;
    }
    async json() {
        return this.body;
    }
}

async function testApiUpdate() {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        console.error('Please define MONGODB_URI');
        process.exit(1);
    }

    try {
        // We need to connect because the route uses dbConnect which might rely on global mongoose or initiate connection
        // But route imports `dbConnect` from `@/lib/dbConnect`. 
        // Since we are running in node, `@/` alias won't work without setup.
        // So we can't easily run the route file directly if it uses aliases.

        // Instead, I will simulate the UPDATE logic using Mongoose directly, essentially repeating `test-update-user.js` but strictly following the route's logic.
        // Actually, I can't import the route file due to aliases.

        // I will write a script that does EXACTLY what the route does, copy-pasting the logic.

        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const UserSchema = new mongoose.Schema({
            // partial schema to test expectations
            expectedCaste: { type: String, default: null },
            preferredCity: { type: String, default: null },
            updatedAt: Date
        }, { strict: false });

        const User = mongoose.models.User || mongoose.model('User', UserSchema);

        const user = await User.findOne({});
        if (!user) { console.log('No user'); return; }

        const body = {
            userId: user._id.toString(),
            expectedCaste: 'ThroughAPI_Simulation',
            preferredCity: 'SimulationCity',
            phone: '1234567890' // should be ignored
        };

        // Route Logic Simulation
        const { userId, phone, ...updateData } = body;
        console.log("Update Data:", updateData);

        updateData.updatedAt = new Date();

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        );

        console.log('Result:', updatedUser.expectedCaste, updatedUser.preferredCity);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

testApiUpdate();
