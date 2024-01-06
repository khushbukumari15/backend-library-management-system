const booksmodel = require("../models/books.model")
const resConst = require("../constants/res.constants")

const addingBookValidations = function (bookdata){
    if(!bookdata.bookId || !bookdata.bookName || !bookdata.price || !bookdata.genre){
        return resConst.missingFieldValidationError
    }

    return booksmodel.addingBook(bookdata)
} 

module.exports = {addingBookValidations}