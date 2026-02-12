
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable inside .env');
    process.exit(1);
}

async function checkRaw() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const collection = mongoose.connection.db.collection('formsections');
        const sections = await collection.find({}).toArray();

        let output = `Found ${sections.length} sections (RAW DATA):\n`;

        sections.forEach(section => {
            output += `\nSection: "${section.label}" (Name: "${section.name}")\n`;
            output += `Fields Count: ${section.fields ? section.fields.length : 'undefined'}\n`;
            if (section.fields && section.fields.length > 0) {
                output += `Fields: ${JSON.stringify(section.fields, null, 2)}\n`;
            }
        });

        fs.writeFileSync('debug_raw.txt', output);
        console.log('Output written to debug_raw.txt');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkRaw();
