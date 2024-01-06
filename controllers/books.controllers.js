const booksService = require("../services/books.services")

const addingBookData = async function (req, res){
    const bookDetails = req.body
    const addbook = booksService.addingBookValidations(bookDetails)
    return addbook
}

module.exports = {
    addingBookData
}