const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://maheshkadam9298_db_user:mahesh@cluster0.tbxlg8f.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db();
        const collection = db.collection('formsections');

        const section = await collection.findOne({ label: { $regex: /Expectation/i } });

        if (!section) {
            console.log('Expectations section not found!');
            return;
        }

        console.log(`Section: ${section.label}`);
        console.log('Current Fields Order:');

        // Sort fields by order
        const sortedFields = section.fields.sort((a, b) => (a.order || 0) - (b.order || 0));

        sortedFields.forEach(f => {
            console.log(`- [${f.order}] ${f.label} (${f.name})`);
        });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
