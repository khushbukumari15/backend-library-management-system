const dbModel = require("./db.model")
const dbConst = require("../constants/db.constants")
const resConst = require("../constants/res.constants")


const addingBook = async function (newBook) {
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.booksCollection)
        const result = await collection.insertOne(newBook)
        console.log(result)
        return resConst.addingBookSuccess

    }
    catch (error) {
        console.error("registration error: ", error);
        return resConst.internalServerError
      }
    finally{
        // await client.close();
    }
}

const listAllBooks = async function () {
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.booksCollection)
        const query = {}
        const allBooks = collection.find(query)
        
        if ((await collection.countDocuments(query))===0){
            return resConst.missingDocument
        }
        
        const booksArray = []
        for await(const doc of allBooks){
            booksArray.push(doc)
        }
        return booksArray
    }
    catch (error) {
        console.error("registration error: ", error);
        return resConst.internalServerError
      }
    finally{
        // await client.close();
    }
}

module.exports = {
    addingBook,
    listAllBooks
}