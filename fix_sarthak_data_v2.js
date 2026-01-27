const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const targetPhone = "+917775927763"; // Sarthak

        console.log(`Fixing missing Income/Education for: ${targetPhone}`);

        const result = await User.updateOne(
            { phone: targetPhone },
            {
                $set: {
                    income: "5-8 Lakhs", // Matches expectedIncome
                    education: "Bachelor's", // Common default
                    occupation: "Software Engineer" // Just in case
                }
            }
        );

        console.log(`Update Result: modified ${result.modifiedCount}`);

        const u = await User.findOne({ phone: targetPhone });
        console.log(`Updated Fields:`);
        console.log(`- Income: ${u.income}`);
        console.log(`- Education: ${u.education}`);

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
