const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book")

router.get("/books",bookController.handleGetAllBooks);
router.get("/books/:bookId",bookController.handleGetBookByID);
router.post("/book",bookController.handleCreateNewBooks);
router.delete("/books/:bookId",bookController.handleDeleteBooksByID);

module.exports = router;
