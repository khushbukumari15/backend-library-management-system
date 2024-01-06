let { ObjectId } = require("mongodb");
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
        console.error("radding new book error: ", error);
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
        console.error("listing book error: ", error);
        return resConst.internalServerError
      }
    finally{
        // await client.close();
    }
}

const deleteBook = async function (id){
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.booksCollection)
        const query = {_id: new ObjectId(id)}
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
            return resConst.deleteSuccess
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
            return resConst.missingDocument
          }
    }
    catch(error) {
        console.error("delete book error: ", error);
        return resConst.internalServerError
    }
    finally{
        // await client.close();
    }
}

module.exports = {
    addingBook,
    listAllBooks,
    deleteBook,
}