const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://maheshkadam9298_db_user:mahesh@cluster0.tbxlg8f.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

// Database Name
const dbName = 'test'; // Assuming default, but will check connection string behavior

async function main() {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db();

        // Check FormSections
        const formSections = await db.collection('formsections').find({}).toArray();
        console.log('Found FormSections:', formSections.length);

        formSections.forEach(section => {
            console.log(`Section: ${section.label} (ID: ${section._id})`);
            if (section.label.includes('Expectation')) {
                console.log('Fields:', section.fields.map(f => f.name));
            }
        });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
