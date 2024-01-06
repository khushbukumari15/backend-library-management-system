const booksService = require("../services/books.services")

const addingBookData = async function (req, res){
    const bookDetails = req.body
    const addbook = await booksService.addingBookValidations(bookDetails)
    res.send(addbook)
}

module.exports = {
    addingBookData
}