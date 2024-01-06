const dbModel = require("./db.model")
const dbConst = require("../constants/db.constants")
const resConst = require("../constants/res.constants")


const addingBook = async function (newBook) {
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.booksCollection)

        const result = await collection.insertOne(newBook)
        return resConst.addingBookSuccess

    }
    catch (error) {
        console.error("registration error: ", error);
        return resConst.internalServerError
      }
    finally{
        await client.close();
    }
}

module.exports = {
    addingBook
}