const express = require('express');
const router = express.Router();
const booksController = require("../controllers/books.controllers")

router.post('/books', booksController.addingBookData);
router.get('/books', booksController.allBooks)

module.exports = router