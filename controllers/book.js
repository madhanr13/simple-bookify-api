const fs = require("fs");
const path = require("path");
let books = [];

function handleGetAllBooks(req, res) {
  return res.render("books");
}

function handleGetBookByID(req, res) {
  const id = req.params.bookId;
  const book = books.find((e) => e.id === Number(id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.json({ book });
}

function handleCreateNewBooks(req, res) {
  const bookFromClient = req.body;
  books.push(bookFromClient);
  res.status(201).json({ status: "success" });
}

function handleDeleteBooksByID(req, res) {
  const bookIdToDelete = req.params.bookId;
  books = books.filter((e) => e.id !== Number(bookIdToDelete));
  return res.json({ status: "deleted" });
}

module.exports = {
  handleGetAllBooks,
  handleGetBookByID,
  handleCreateNewBooks,
  handleDeleteBooksByID,
};
