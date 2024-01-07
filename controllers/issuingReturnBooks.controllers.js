const issueService = require("../services/issuingReturnBooks.services")

const addingIssueBook = async function (req, res){
    const issueingDetails = req.body
    const bId = req.params.bId
    const mId = req.params.mId
    const addDetails = await issueService.issueBooksValidation(issueingDetails, bId, mId)
    res.send(addDetails)
}

module.exports = {addingIssueBook}