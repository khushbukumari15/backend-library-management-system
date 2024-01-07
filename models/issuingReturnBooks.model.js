const dbModel = require('./db.model')
const dbConst = require("../constants/db.constants")
const resConst = require("../constants/res.constants")

const newIssueBook = async function (issueBook, bId, mId) {
    try{
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
    finally{
        // await client.close();
    }
}

module.exports = {
    newIssueBook
}