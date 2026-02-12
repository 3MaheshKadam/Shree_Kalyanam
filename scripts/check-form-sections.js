
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable inside .env');
    process.exit(1);
}

const formSectionSchema = new mongoose.Schema({
    name: String,
    label: String,
    order: Number,
    fields: [{
        name: String,
        label: String,
        type: String,
        required: Boolean,
        options: [String],
        order: Number
    }]
});

const FormSection = mongoose.models.FormSection || mongoose.model('FormSection', formSectionSchema);

async function checkSections() {
    try {
        await mongoose.connect(MONGODB_URI);
        let output = 'Connected to MongoDB\n';

        const sections = await FormSection.find({}).sort({ order: 1 });

        output += `Found ${sections.length} sections:\n`;

        sections.forEach(section => {
            output += `\nSection: "${section.label}" (Name: "${section.name}")\n`;
            if (section.fields && section.fields.length > 0) {
                section.fields.forEach(field => {
                    output += `  - Field Label: "${field.label}", Name: "${field.name}"\n`;
                });
            } else {
                output += '  (No fields)\n';
            }
        });

        fs.writeFileSync('debug_output.txt', output);
        console.log('Output written to debug_output.txt');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkSections();
