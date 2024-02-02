const { ObjectId } = require("mongodb")
const dbModel = require('./db.model')
const dbConst = require("../constants/db.constants")
const resConst = require("../constants/res.constants")

const newIssueBook = async function (issueBook, bId, mId) {
    try {
        const dbCall = await dbModel.dbConnection()
        const issuecollection = dbCall.collection(dbConst.issueCollectionName)
        const booksCollection = dbCall.collection(dbConst.booksCollection)
        const membersCollection = dbCall.collection(dbConst.membersCollectionName)

        const filterBook = { "bookId": parseInt(bId) }
        const filterMember = { "memberId": parseInt(mId) }
        
        const book = await booksCollection.findOne(filterBook)
        const member = await membersCollection.findOne(filterMember)

        const query = { issueId: issueBook.issueId }
        const issueIdCheck = await issuecollection.findOne(query)

        if (!member) {
            return resConst.memberFails
        }
        if (!book) {
            return resConst.bookExistance
        }

        if (!(book.status == "available")) {
            return resConst.issueingBookFails
        }
        if (issueIdCheck) {
            return resConst.issueIdExistance
        }

        book.status = "issued"
        const bookUpdate = { $set: { "status": book.status } }
        const update = await booksCollection.updateOne(filterBook, bookUpdate)

        const currentDate = new Date()
        const newDate = new Date(currentDate)
        newDate.setDate(currentDate.getDate() + parseInt(issueBook.period))

        issueBook.issueDate = currentDate.toJSON().slice(0, 10)
        issueBook.returnDate = newDate.toJSON().slice(0, 10)

        const result = await issuecollection.insertOne(issueBook)
        return resConst.issueingBookSuccess
    }
    catch (error) {
        console.error("adding new book error: ", error);
        return resConst.internalServerError
    }
    finally {
        // await client.close();
    }
}

const returnBook = async function (issueId, bookId) {
    try {
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.issueCollectionName)
        const booksCollection = dbCall.collection(dbConst.booksCollection)
        const filter = { bookId: parseInt(bookId) }
        const book = await booksCollection.findOne(filter)

        const query = { issueId: parseInt(issueId) }
        const issueData = await collection.findOne(query)
        if(!issueData){
            return resConst.missingIssueDocument
        }
        if (!book) {
            return resConst.bookExistance
        }
        if (book.status !== "issued") {
            return resConst.bookNotIssued
        }

        book.status = "available"
       
        const date = new Date().toJSON().slice(0, 10)

        if (issueData.returnDate < date || issueData.returnDate > date) {
            issueData.returnDate = date
            const returnDateUpdate = await collection.updateOne(query, { $set: { "returnDate": issueData.returnDate } })
        }
        const updateStatus = await booksCollection.updateOne(filter, { $set: { "status": book.status } });
        return resConst.returnBookSuccess
    }
    catch (error) {
        console.error("return book error: ", error);
        return resConst.internalServerError
    }
    finally {
        // await client.close();
    }
}

module.exports = {
    newIssueBook,
    returnBook
}