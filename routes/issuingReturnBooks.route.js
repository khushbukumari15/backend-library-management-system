const express = require('express')
const router = express.Router()
const issueingController = require("../controllers/issuingReturnBooks.controllers")

router.post('/issue', issueingController.addingIssueBook)

module.exports = router