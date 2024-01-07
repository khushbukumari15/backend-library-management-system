const express = require('express')
const router = express.Router()
const issueingController = require("../controllers/issuingReturnBooks.controllers")

router.post('/issue', issueingController.addingIssueBook)
router.delete('/issue/:issueId/:bookId', issueingController.returnBookDelete)

module.exports = router