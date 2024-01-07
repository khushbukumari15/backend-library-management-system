const issueService = require("../services/issuingReturnBooks.services")

const addingIssueBook = async function (req, res){
    const issueingDetails = req.body
    const addDetails = await issueService.issueBooksValidation(issueingDetails)
    res.send(addDetails)
}

const returnBookDelete = async function(req, res){
    const issueId = req.params.issueId
    const bookId = req.params.bookId
    console.log({issueId, bookId})
    const returnBook = await issueService.returnBookValidation(issueId, bookId)
    res.send(returnBook)
}

module.exports = {
    addingIssueBook,
    returnBookDelete
}