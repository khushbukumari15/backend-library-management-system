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

const bookDelete = async function(req, res){
    const findId = req.params.id
    const deleteCall = await booksService.deleteBookValidation(findId)
    res.send(deleteCall)
}

module.exports = {
    addingBookData,
    allBooks,
    bookDelete,
}