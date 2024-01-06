const express = require('express');
const router = express.Router();
const booksController = require("../controllers/books.controllers")

router.post('/books', booksController.addingBookData);
router.get('/books', booksController.allBooks)
router.delete('/books/:id', booksController.bookDelete)
router.put('/books/:id', booksController.updatingBook)

module.exports = router