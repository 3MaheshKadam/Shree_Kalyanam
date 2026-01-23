const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://maheshkadam9298_db_user:mahesh@cluster0.tbxlg8f.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

const newFields = [
    {
        name: 'expectedSubCaste',
        label: 'Expected Sub-caste',
        type: 'text',
        required: false,
        placeholder: 'Enter expected sub-caste',
        order: 2 // Adjust order as needed
    },
    {
        name: 'expectedWorkingStatus',
        label: 'Partner Working Status',
        type: 'select',
        required: false,
        options: ['Yes', 'No', "Doesn't Matter"],
        placeholder: 'Select status',
        order: 6 // Adjust order as needed
    }
];

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db();
        const collection = db.collection('formsections');

        // Find the Expectations section
        // Note: The specific label might be "Expectations" or something similar. Adjust query if needed.
        const section = await collection.findOne({ label: { $regex: /Expectation/i } });

        if (!section) {
            console.log('Expectations section not found!');
            return;
        }

        console.log('Found section:', section.label);

        // Check if fields already exist
        const existingFieldNames = section.fields.map(f => f.name);
        const fieldsToAdd = newFields.filter(nf => !existingFieldNames.includes(nf.name));

        if (fieldsToAdd.length === 0) {
            console.log('All fields already exist.');
            return;
        }

        console.log('Adding fields:', fieldsToAdd.map(f => f.name));

        // Update the section
        // We append the new fields to the existing fields array
        const result = await collection.updateOne(
            { _id: section._id },
            { $push: { fields: { $each: fieldsToAdd } } }
        );

        console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s).`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
