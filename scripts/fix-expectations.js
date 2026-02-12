
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable inside .env');
    process.exit(1);
}

async function fixExpectations() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const db = mongoose.connection.db;
        const collection = db.collection('formsections');

        // Define the correct fields
        const newFields = [
            {
                name: "expectedCaste",
                label: "Expected Caste",
                type: "text",
                required: false,
                options: [],
                placeholder: "Enter Expected Caste",
                order: 1
            },
            {
                name: "expectedSubCaste",
                label: "Expected Sub Caste",
                type: "text",
                required: false,
                options: [],
                placeholder: "Enter Expected Sub Caste",
                order: 2
            },
            {
                name: "expectedHeight",
                label: "Expected Height",
                type: "select",
                required: false,
                options: ["4'5\" - 5'0\"", "5'0\" - 5'5\"", "5'5\" - 6'0\"", "6'0\"+"],
                order: 3
            },
            {
                name: "expectedEducation",
                label: "Expected Education",
                type: "select",
                required: false,
                options: ["High School", "Bachelor's", "Master's", "Doctorate", "Diploma", "Other"],
                order: 4
            },
            {
                name: "preferredCity",
                label: "Preferred City",
                type: "text",
                required: false,
                options: [],
                placeholder: "Enter Preferred City",
                order: 5
            },
            {
                name: "expectedAgeDifference",
                label: "Expected Age Difference",
                type: "select",
                required: false,
                options: ["1-3 Years", "3-5 Years", "5-7 Years", "7+ Years", "Doesn't Matter"],
                order: 6
            },
            {
                name: "expectedIncome",
                label: "Expected Income",
                type: "select",
                required: false,
                options: ["0-2 Lakhs", "2-5 Lakhs", "5-8 Lakhs", "8-12 Lakhs", "12-18 Lakhs", "18-25 Lakhs", "25-35 Lakhs", "35+ Lakhs"],
                order: 7
            },
            {
                name: "divorcee",
                label: "Accept Divorcee",
                type: "select",
                required: false,
                options: ["Yes", "No"],
                order: 8
            },
            {
                name: "expectedWorkingStatus",
                label: "Expected Working Status",
                type: "select",
                required: false,
                options: ["Yes", "No", "Doesn't Matter"],
                order: 9
            }
        ];

        // Update the section
        const result = await collection.updateOne(
            { label: 'Expectations' },
            { $set: { fields: newFields } }
        );

        console.log('Update result:', result);
        console.log('Successfully updated Expectations fields.');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

fixExpectations();
