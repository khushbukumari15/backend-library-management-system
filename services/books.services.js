const booksModel = require("../models/books.model")
const resConst = require("../constants/res.constants")

const addingBookValidations = function (bookdata){
    if(!bookdata.bookId || !bookdata.bookName || !bookdata.price || !bookdata.genre){
        return resConst.missingFieldValidationError
    }

    return booksModel.addingBook(bookdata)
}

const getAllBooksValidations = function (){
    return booksModel.listAllBooks()   
}


module.exports = {
    addingBookValidations,
    getAllBooksValidations,
}