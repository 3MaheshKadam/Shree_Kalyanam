
const mongoose = require('mongoose');
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

async function seedExpectations() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Find the Expectations section
        let section = await FormSection.findOne({ label: 'Expectations' });

        if (!section) {
            console.log('Expectations section not found. Creating it...');
            section = new FormSection({
                name: 'expectations',
                label: 'Expectations',
                order: 6,
                fields: []
            });
        } else {
            console.log('Found user section:', section.name);
        }

        // Define fields
        const newFields = [
            { name: "Expected Caste", label: "Expected Caste", type: "text", required: false, order: 1 },
            { name: "Expected Sub Caste", label: "Expected Sub Caste", type: "text", required: false, order: 2 },
            { name: "Preferred City", label: "Preferred City", type: "text", required: false, order: 3 },
            { name: "Expected Age Difference", label: "Expected Age Difference", type: "select", required: false, options: ["1-2 Years", "2-3 Years", "3-5 Years", "5+ Years", "Same Age"], order: 4 },
            { name: "Expected Education", label: "Expected Education", type: "select", required: false, options: ["Any", "High School", "Bachelor's", "Master's", "Doctorate"], order: 5 },
            { name: "Expected Working Status", label: "Expected Working Status", type: "select", required: false, options: ["Yes", "No", "Doesn't Matter"], order: 6 },
            { name: "Expected Income", label: "Expected Income", type: "select", required: false, options: ["Any", "0-5 Lakhs", "5-10 Lakhs", "10-20 Lakhs", "20+ Lakhs"], order: 7 },
            { name: "Expected Height", label: "Expected Height", type: "text", required: false, order: 8 },
            { name: "Accept Divorcee", label: "Accept Divorcee", type: "select", required: false, options: ["Yes", "No"], order: 9 }
        ];

        section.fields = newFields;
        await section.save();

        console.log('Updated Expectations section with fields:', newFields.length);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Done.');
    }
}

seedExpectations();
