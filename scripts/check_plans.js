const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://maheshkadam9298_db_user:mahesh@cluster0.tbxlg8f.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db();
        const collection = db.collection('subscriptions');

        const plans = await collection.find({}).toArray();
        console.log(`Found ${plans.length} plans:`);
        plans.forEach(p => {
            console.log(`- Name: ${p.name}, Price: ${p.price}, Duration: ${p.durationInDays} days, ID: ${p._id}`);
        });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
