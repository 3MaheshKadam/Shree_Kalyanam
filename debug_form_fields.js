
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const FormSectionSchema = new mongoose.Schema({
    label: String,
    order: Number,
    icon: String,
    fields: [{
        label: String,
        name: String,
        type: { type: String, default: 'text' },
        required: { type: Boolean, default: false },
        options: [String],
        placeholder: String,
        order: Number
    }]
}, { strict: false });

const FormSection = mongoose.models.FormSection || mongoose.model('FormSection', FormSectionSchema);

async function run() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is undefined");
        }
        await mongoose.connect(process.env.MONGODB_URI);

        const sections = await FormSection.find({});

        console.log("--- FINDING RELATIVE/SURNAME FIELDS ---");
        sections.forEach(section => {
            section.fields.forEach(field => {
                const label = field.label || "";
                const name = field.name || "";
                if (label.toLowerCase().includes("relative") || name.toLowerCase().includes("relative") || label.toLowerCase().includes("surname") || name.toLowerCase().includes("surname")) {
                    console.log(`FOUND MATCH:`);
                    console.log(`Section: ${section.label}`);
                    console.log(`Label: "${label}"`);
                    console.log(`Name: "${name}"`);
                    console.log(`-------------------`);
                }
            });
        });

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await mongoose.disconnect();
    }
}

run();
