const issueModel = require("../models/issuingReturnBooks.model")
const resConst = require("../constants/res.constants")

const issueBooksValidation = function (issueingData, bId, mId){
    if(!issueingData.issueId || !issueingData.bookId || !issueingData.memberId || !issueingData.period ){
        return resConst.missingFieldValidationError
    }
    return issueModel.newIssueBook(issueingData, bId, mId)
}

const returnBookValidation = function(id, bookId){
    return issueModel.returnBook(id, bookId)
}

module.exports = {
    issueBooksValidation,
    returnBookValidation
}