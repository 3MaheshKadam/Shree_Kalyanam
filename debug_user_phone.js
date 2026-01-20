
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({
    phone: String,
    name: String,
    isVerified: Boolean
}, { strict: false }); // Allow loose fields for debugging

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        const targetPhone = "8668903099";

        console.log(`Searching for phone containing ${targetPhone}...`);

        // Exact 10 digit
        const u1 = await User.find({ phone: targetPhone });
        console.log(`Match '8668903099': found ${u1.length}`);
        u1.forEach(u => console.log(` - ID: ${u._id}, Phone: '${u.phone}'`));

        // With +91
        const u2 = await User.find({ phone: `+91${targetPhone}` });
        console.log(`Match '+918668903099': found ${u2.length}`);
        u2.forEach(u => console.log(` - ID: ${u._id}, Phone: '${u.phone}'`));

        // Regex
        const u3 = await User.find({ phone: { $regex: targetPhone } });
        console.log(`Match regex /${targetPhone}/: found ${u3.length}`);
        u3.forEach(u => console.log(` - ID: ${u._id}, Phone: '${u.phone}'`));

    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
