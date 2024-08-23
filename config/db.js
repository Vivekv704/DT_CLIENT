const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'DT_CLIENT';
let db;

const connectDB = async () => {
    try {
        const client = await MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected to Database');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};
const getDB = () => db;

module.exports = { connectDB, getDB };
