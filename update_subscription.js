const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function setGoldSubscription() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const phone = '+919689420767';
        // Find user by phone (try both formats just in case)
        const user = await User.findOne({
            $or: [{ phone: phone }, { phone: '9689420767' }]
        });

        if (!user) {
            console.log('User not found!');
            return;
        }

        console.log(`Found user: ${user.name} (${user._id})`);

        // Update subscription
        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 3); // 3 months for Gold usually

        const result = await User.findByIdAndUpdate(user._id, {
            $set: {
                subscription: {
                    planId: 'gold',
                    planName: 'Gold Plan',
                    price: 2999, // Assuming price, adjust if needed
                    startDate: startDate,
                    endDate: endDate,
                    isActive: true,
                    features: ['Chat', 'Video Call', 'Contact View'] // Example features
                }
            }
        }, { new: true });

        console.log('User subscription updated to Gold:', result.subscription);

    } catch (error) {
        console.error('Error updating subscription:', error);
    } finally {
        await mongoose.disconnect();
    }
}

setGoldSubscription();
