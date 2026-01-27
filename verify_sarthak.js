const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        const targetPhone = "+917775927763";
        // Convert to regex to be sure of match, though exact string should work
        // Using updateOne to be absolutely sure
        console.log(`Attempting to update user with phone: ${targetPhone}`);

        const result = await User.updateOne(
            { phone: targetPhone },
            {
                $set: {
                    verificationStatus: "Verified",
                    isVerified: true
                }
            }
        );

        console.log(`Update Result: matched ${result.matchedCount}, modified ${result.modifiedCount}`);

        // Verify immediately
        const updatedUser = await User.findOne({ phone: targetPhone });
        if (updatedUser) {
            console.log(`Final DB Status: '${updatedUser.verificationStatus}'`);
            console.log(`isVerified: ${updatedUser.isVerified}`);
        } else {
            console.log("❌ User not found after update?!");
        }

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
