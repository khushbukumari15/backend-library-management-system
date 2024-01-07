const { ObjectId } = require("mongodb")
const dbModel = require('./db.model')
const dbConst = require("../constants/db.constants")
const resConst = require("../constants/res.constants")

const newIssueBook = async function (issueBook ,bId, mId) {
    try {
        const dbCall = await dbModel.dbConnection()
        const issuecollection = dbCall.collection(dbConst.issueCollectionName)
        const booksCollection = dbCall.collection(dbConst.booksCollection)
        const membersCollection = dbCall.collection(dbConst.membersCollectionName)
        
        const filterBook = {"bookId": parseInt(bId)}
        const filterMember = {"memberId": parseInt(mId)}
        const book = await booksCollection.findOne(filterBook)
        const member = await membersCollection.findOne(filterMember)

        if( !book || !(book.status=="available") || !member ){
            return resConst.issueingBookFails
        }
        book.status = "issued"
        const bookUpdate = {$set: {"status": book.status}}
        const update = await booksCollection.updateOne(filterBook, bookUpdate)
        
        const result = await issuecollection.insertOne(issueBook)
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
        book.status = "available"

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