// seed.js
const { connect, getClient } = require('./db');


const sampleBooks = [
{ title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988, copies: 5, borrowedCount: 120 },
{ title: "Clean Code", author: "Robert C. Martin", genre: "Programming", year: 2008, copies: 3, borrowedCount: 80 },
{ title: "Introduction to Algorithms", author: "Cormen et al.", genre: "Education", year: 2009, copies: 2, borrowedCount: 40 },
{ title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", year: 1999, copies: 4, borrowedCount: 75 },
{ title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, copies: 6, borrowedCount: 200 },
{ title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-fiction", year: 2011, copies: 2, borrowedCount: 150 },
{ title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Psychology", year: 2011, copies: 3, borrowedCount: 95 },
{ title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997, copies: 10, borrowedCount: 300 },
{ title: "Deep Work", author: "Cal Newport", genre: "Self-help", year: 2016, copies: 2, borrowedCount: 55 },
{ title: "Atomic Habits", author: "James Clear", genre: "Self-help", year: 2018, copies: 4, borrowedCount: 180 }
];


async function run() {
try {
const db = await connect();
const coll = db.collection('books');
await coll.deleteMany({});
const res = await coll.insertMany(sampleBooks);
console.log('Inserted', res.insertedCount, 'documents');
} catch (err) {
console.error(err);
} finally {
const client = getClient();
await client.close();
}
}


run();