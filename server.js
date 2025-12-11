const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Path to JSON file
const DATA_FILE = path.join(__dirname, 'books.json');

// Ensure books.json exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
    console.log('books.json file created');
}

// Helper function to read books from JSON
function readBooks() {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
}

// Helper function to write books to JSON
function writeBooks(books) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
}

// GET /books
app.get('/books', (req, res) => {
    const books = readBooks();
    res.json(books);
});

// POST /books
app.post('/books', (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const books = readBooks();
    books.push({ title, author, year: Number(year) });
    writeBooks(books);
    res.status(201).json({ message: 'Book added successfully' });
});

// DELETE /books/:index
app.delete('/books/:index', (req, res) => {
    const idx = Number(req.params.index);
    const books = readBooks();
    if (idx >= 0 && idx < books.length) {
        books.splice(idx, 1);
        writeBooks(books);
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// PUT /books/:index
app.put('/books/:index', (req, res) => {
    const idx = Number(req.params.index);
    const { title, author, year } = req.body;
    const books = readBooks();
    if (idx >= 0 && idx < books.length) {
        books[idx] = { title, author, year: Number(year) };
        writeBooks(books);
        res.json({ message: 'Book updated successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
