
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
        console.log("Connecting to DB...");
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is undefined");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected.");

        const sections = await FormSection.find({});
        console.log(`Found ${sections.length} form sections.`);

        let subCasteField = null;

        sections.forEach(section => {
            section.fields.forEach(field => {
                if (field.name === 'subCaste' || field.label === 'Sub Caste') {
                    subCasteField = field;
                }
            });
        });

        if (subCasteField) {
            console.log('--- Sub Caste Configuration ---');
            console.log(JSON.stringify(subCasteField, null, 2));

            if (subCasteField.type === 'select' && subCasteField.options && subCasteField.options.length > 0) {
                console.log(`Type: Dropdown (select)`);
                console.log(`Option Count: ${subCasteField.options.length}`);
                console.log(`First 5 Options: ${subCasteField.options.slice(0, 5).join(', ')}`);
            } else {
                console.log(`Type: Text Input (${subCasteField.type})`);
                console.log('No predefined options found.');
            }
        } else {
            console.log('Field "subCaste" NOT found in any form section.');
        }

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await mongoose.disconnect();
    }
}

run();
