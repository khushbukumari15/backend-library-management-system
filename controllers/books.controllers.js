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

const updatingBook = async function(req, res){
    const dataToUpdate = req.body
    console.log(dataToUpdate)
    const update = await booksService.updateBookValidation(req.params.id ,dataToUpdate)
    res.send(update)
}

module.exports = {
    addingBookData,
    allBooks,
    bookDelete,
    updatingBook
}