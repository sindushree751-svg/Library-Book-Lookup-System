// db.js
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();


const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.DB_NAME || 'libraryDB';


const client = new MongoClient(uri, {});
let db;


async function connect() {
if (!db) {
await client.connect();
db = client.db(dbName);
}
return db;
}


function getClient() {
return client;
}


module.exports = { connect, getClient };