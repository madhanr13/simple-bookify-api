const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function (req, res) {
  console.log(`Server started at PORT ${port}`);
});

let books = [];

//Middlewares 
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log("Hello from middleware");
  next();
});
app.use(function (req, res, next) {
  console.log("Hello from middleware 2");
  next();
});

app.get("/books", function (req, res) {
  res.json({ books });
});

app.get("/books/:bookId", function (req, res) {
  const id = req.params.bookId;
  const book = books.find((e) => e.id === Number(id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.json({ book });
});

app.post("/book", function (req, res) {
  const bookFromClient = req.body;
  books.push(bookFromClient);
  res.status(201).json({ status: "success" });
});

app.delete("/books/:bookId", function (req, res) {
  const bookIdToDelete = req.params.bookId;
  books = books.filter((e) => e.id !== Number(bookIdToDelete));
  return res.json({ status: "deleted" });
});
