const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://maheshkadam9298_db_user:mahesh@cluster0.tbxlg8f.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

const desiredOrder = [
    'expectedCaste',         // 0
    'expectedSubCaste',      // 1 (Moved here)
    'preferredCity',         // 2
    'expectedAgeDifference', // 3
    'expectedIncome',        // 4
    'expectedEducation',     // 5
    'expectedWorkingStatus', // 6
    'divorcee',              // 7
    'expectedHeight',        // 8 (Assuming this exists, adding to end to be safe)
];

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db();
        const collection = db.collection('formsections');

        const section = await collection.findOne({ label: { $regex: /Expectation/i } });
        if (!section) { console.log('Section not found'); return; }

        console.log('Updating field orders...');

        // Update each field's order in the array
        const updatedFields = section.fields.map(field => {
            const newIndex = desiredOrder.indexOf(field.name);
            if (newIndex !== -1) {
                return { ...field, order: newIndex };
            }
            // If field not in desiredOrder, keep it at the end
            return { ...field, order: 99 };
        });

        // Sort them just to be clean in the array (optional, but good for reading)
        updatedFields.sort((a, b) => a.order - b.order);

        const result = await collection.updateOne(
            { _id: section._id },
            { $set: { fields: updatedFields } }
        );

        console.log(`Updated ${result.modifiedCount} document.`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
