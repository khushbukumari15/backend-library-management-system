const booksService = require("../services/books.services")

const addingBookData = async function (req, res){
    const bookDetails = req.body
    const addbook = await booksService.addingBookValidations(bookDetails)
    res.send(addbook)
}

const allBooks = async function(req, res){
    const getbooks = await booksService.getAllBooksValidations()
    res.send(getbooks )

}

module.exports = {
    addingBookData,
    allBooks
}