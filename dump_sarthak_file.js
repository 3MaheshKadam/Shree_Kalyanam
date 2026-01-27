const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const targetPhone = "+917775927763";
        const user = await User.findOne({ phone: targetPhone });

        if (user) {
            fs.writeFileSync('sarthak_full.json', JSON.stringify(user, null, 2));
            console.log("Dumped to sarthak_full.json");
        } else {
            console.log("User not found");
        }

    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

run();
