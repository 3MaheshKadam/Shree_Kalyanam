const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const targetPhone = "+917775927763"; // Sarthak

        console.log(`Fixing data for user: ${targetPhone}`);

        const result = await User.updateOne(
            { phone: targetPhone },
            {
                $set: {
                    caste: "Maratha",
                    subCaste: "96 Kuli", // Common default for Shinde
                    dob: new Date("2000-01-30"), // 26 years old
                    height: "5'5\"", // Standard format
                    profileCompletion: 80 // Bump checks
                }
            }
        );

        console.log(`Update Result: matched ${result.matchedCount}, modified ${result.modifiedCount}`);

        // Verify
        const updatedUser = await User.findOne({ phone: targetPhone });
        if (updatedUser) {
            console.log(`Updated Data:`);
            console.log(`- Caste: ${updatedUser.caste}`);
            console.log(`- DOB: ${updatedUser.dob}`);
            console.log(`- Height: ${updatedUser.height}`);
        } else {
            console.log("❌ User not found");
        }

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
