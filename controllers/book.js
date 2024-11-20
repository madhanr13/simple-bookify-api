const Book = require("../models/book");
let books = [];

async function handleGetAllBooks(req, res) {
  const booksinDb = await Book.find({});
  return res.render("books", {
    books: booksinDb,
  });
}

async function handleGetBookByID(req, res) {
  const id = req.params.bookId;
  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.render("book", { book });
}

async function handleCreateNewBooks(req, res) {
  const bookFromClient = req.body;
  await Book.create(bookFromClient);
  res.status(201).json({ status: "success" });
}

async function handleDeleteBooksByID(req, res) {
  const bookIdToDelete = req.params.bookId;
  await Book.findByIdAndDelete(bookIdToDelete);
  return res.json({ status: "deleted" });
}

module.exports = {
  handleGetAllBooks,
  handleGetBookByID,
  handleCreateNewBooks,
  handleDeleteBooksByID,
};
