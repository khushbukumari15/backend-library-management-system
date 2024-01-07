const { ObjectId } = require("mongodb")
const dbModel = require('./db.model')
const dbConst = require("../constants/db.constants")
const resConst = require("../constants/res.constants")

const newIssueBook = async function (issueBook) {
    try {
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.issueCollectionName)
        const result = await collection.insertOne(issueBook)
        return resConst.issueingBookSuccess
    }
    catch (error) {
        console.error("radding new book error: ", error);
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
        
        if (!book || book.status !== "issued") {
            message = "Book not issued or not found"
            return message
        }
        book.status = "availabe"

        const query = { issueId: parseInt(issueId) }
        const result = await collection.deleteOne(query);
        const updateStatus = await booksCollection.updateOne(filter, { $set: { "status": book.status } });

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
            return resConst.deleteSuccess
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
            return resConst.missingDocument
        }
    }
    catch (error) {
        console.error("delete book error: ", error);
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