const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const targetPhone = "+917775927763";
        // Convert to regex to be sure of match, though exact string should work
        const user = await User.findOne({ phone: targetPhone });

        if (!user) {
            console.log("❌ User NOT FOUND with exact phone match.");
            // Try a search
            const users = await User.find({ name: /Sarthak/i });
            console.log(`Found ${users.length} users named Sarthak:`);
            users.forEach(u => console.log(`- ${u.name}: ${u.phone} [${u.verificationStatus}]`));
        } else {
            console.log("Current DB State:");
            console.log(`Name: ${user.name}`);
            console.log(`Phone: ${user.phone}`);
            console.log(`isVerified: ${user.isVerified}`);
            console.log(`verificationStatus: '${user.verificationStatus}'`);
            console.log(`_id: ${user._id}`);
        }

    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
