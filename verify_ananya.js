const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const user = await User.findOne({ phone: "+919876543217" });
        console.log("Verification Result:");
        console.log(`User: ${user.name}`);
        console.log(`Plan: ${user.subscription.plan}`);
        console.log(`Is Subscribed: ${user.subscription.isSubscribed}`);
        console.log(`Expires: ${user.subscription.expiresAt}`);
    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
