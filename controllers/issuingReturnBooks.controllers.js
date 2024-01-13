const issueService = require("../services/issuingReturnBooks.services")

const addingIssueBook = async function (req, res){
    const issueingDetails = req.body
    const bId = req.params.bId
    const mId = req.params.mId
    const addDetails = await issueService.issueBooksValidation(issueingDetails, bId, mId)
    res.send(addDetails)
}

const returnBookData = async function(req, res){
    const issueId = req.params.issueId
    const bookId = req.params.bookId
    console.log({issueId, bookId})
    const returnBook = await issueService.returnBookValidation(issueId, bookId)
    res.send(returnBook)
}

module.exports = {
    addingIssueBook,
    returnBookData
}