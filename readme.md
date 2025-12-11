
# 📘 Library Management System — CRUD (Node.js + Express + MongoDB)

This project is a simple **Library Management System** built using **Node.js**, **Express.js**, and **MongoDB**.
It demonstrates basic **CRUD operations**:

* ➕ Create Book
* 📚 Read Books
* ✏ Update Book
* 🗑 Delete Book

Useful for beginners learning backend development and MongoDB.

---

## 🚀 Features

✔ Add new books
✔ Get all books
✔ Get a single book by ID
✔ Update book details
✔ Delete a book
✔ MongoDB + Express REST API
✔ Easy to integrate with any frontend (HTML/React)

---

## 🧱 Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JavaScript**

---

## 📂 Project Structure

```
library-project/
│── app.js
│── package.json
│── models/
│      └── Book.js
│── routes/
│      └── bookRoutes.js
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone or Download the Project

```
git clone <your-repo-url>
```

### 2️⃣ Install Dependencies

Inside the project folder:

```
npm install
```

### 3️⃣ Start MongoDB

Open a new terminal:

```
mongod
```

### 4️⃣ Run the Server

```
node app.js
```

Server runs at:

```
http://localhost:5000
```

---

## 📚 API Endpoints

| Method     | Endpoint     | Description    |
| ---------- | ------------ | -------------- |
| **POST**   | `/books`     | Add a new book |
| **GET**    | `/books`     | Get all books  |
| **GET**    | `/books/:id` | Get book by ID |
| **PUT**    | `/books/:id` | Update a book  |
| **DELETE** | `/books/:id` | Delete a book  |

---

## 💾 Example Book JSON

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert T. Kiyosaki",
  "year": 1997,
  "genre": "Finance"
}
```

---

## 📦 Dependencies

```
"express": "^4.18.2",
"mongoose": "^7.0.0",
"cors": "^2.8.5"
```

---

## 📝 License

This project is free to use for learning and educational purposes.

---

## 🙌 Author

Created by **Sindhushree**

If you want, I can also create:

✨ *Frontend (HTML/React)*
✨ *GitHub description*
✨ *Project screenshots*

Just tell me!
