const issueModel = require("../models/issuingReturnBooks.model")
const resConst = require("../constants/res.constants")

const issueBooksValidation = function (issueingData){
    if(!issueingData.issueId || !issueingData.bookId || !issueingData.memberId || !issueingData.issueDate || !issueingData.period || !issueingData.returnDate){
        return resConst.missingFieldValidationError
    }

    return issueModel.newIssueBook(issueingData)
}

module.exports = {
    issueBooksValidation
}