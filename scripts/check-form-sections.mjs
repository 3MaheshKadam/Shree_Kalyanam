
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: '.env' });

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
        console.log('Connected to MongoDB');

        const sections = await FormSection.find({}).sort({ order: 1 });

        console.log('Found sections:', sections.length);

        sections.forEach(section => {
            console.log(`\nSection: ${section.label} (Name: ${section.name})`);
            section.fields.forEach(field => {
                console.log(`  - Field: "${field.label}" (Name: "${field.name}")`);
            });
        });

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkSections();
