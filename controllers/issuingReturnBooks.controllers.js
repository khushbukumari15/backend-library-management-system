const issueService = require("../services/issuingReturnBooks.services")

const addingIssueBook = async function (req, res){
    const issueingDetails = req.body
    const addDetails = await issueService.issueBooksValidation(issueingDetails)
    res.send(addDetails)
}

module.exports = {addingIssueBook}