const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
