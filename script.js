const apiBase = '/api'; // server serves frontend static so relative path works

// UI ELEMENTS
const results = document.getElementById('results');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreSelect = document.getElementById('genreSelect');
const topBtn = document.getElementById('topBtn');
const listAllBtn = document.getElementById('listAllBtn');

// FORM ELEMENTS
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const genreInput = document.getElementById('genre');
const yearInput = document.getElementById('year');
const copiesInput = document.getElementById('copies');

const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

// PAGINATION
let page = 1;
const per = 5;
let total = 0;

// RENDER LIST
function renderList(items) {
    if (!items || items.length === 0) {
        results.innerHTML = '<p>No results.</p>';
        return;
    }

    results.innerHTML = items.map(b => `
        <div class="card">
            <div class="title">${b.title}</div>
            <div class="small">${b.author} — ${b.genre} — ${b.year}</div>
            <div class="small">Copies: ${b.copies} | Borrowed: ${b.borrowedCount}</div>
        </div>
    `).join('');
}

// SEARCH
async function search(q) {
    if (!q) return;
    const res = await fetch(`${apiBase}/search?q=${encodeURIComponent(q)}`);
    const items = await res.json();
    renderList(items);
}

// GENRE FILTER
async function genreList(genre) {
    if (!genre) return;
    const res = await fetch(`${apiBase}/genre/${encodeURIComponent(genre)}`);
    const items = await res.json();
    renderList(items);
    listPaginated(1);
}

// LIST ALL
async function listAll() {
    const res = await fetch(`${apiBase}/list`);
    const items = await res.json();
    renderList(items);
}

// PAGINATED LIST
async function listPaginated(p) {
    page = p;
    const res = await fetch(`${apiBase}/list?page=${page}&per=${per}`);
    const data = await res.json();
    total = data.total;
    renderList(data.items);
}

// CLEAR FORM
function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    genreInput.value = "";
    yearInput.value = "";
    copiesInput.value = "";
}

// SAVE BOOK
async function saveBook() {
    const payload = {
        title: titleInput.value,
        author: authorInput.value,
        genre: genreInput.value,
        year: yearInput.value,
        copies: Number(copiesInput.value)
    };

    const res = await fetch(`${apiBase}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    await res.json();
    alert("Book added successfully!");

    clearForm();
    listAll(); // refresh
}

// CANCEL
function cancelBook() {
    clearForm();
    results.innerHTML = "";
}

// EVENT LISTENERS
searchBtn.addEventListener('click', () => search(searchInput.value));
genreSelect.addEventListener('change', () => genreList(genreSelect.value));
listAllBtn.addEventListener('click', listAll);

saveBtn.addEventListener('click', saveBook);
cancelBtn.addEventListener('click', cancelBook);
