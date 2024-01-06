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

const deleteBookValidation = function(id){
    return booksModel.deleteBook(id)
}

const updateBookValidation = function(id, query){
    if(!query.bookId && !query.bookName && !query.price && !query.genre){
        return resConst.missingFieldValidationError
    }
    return booksModel.modifyBookDetails(id, query)
}

module.exports = {
    addingBookValidations,
    getAllBooksValidations,
    deleteBookValidation,
    updateBookValidation
}