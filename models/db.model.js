let { MongoClient } = require("mongodb");
const dbConst = require("../constants/db.constants")
const client = new MongoClient(dbConst.uri)

const dbConnection = async function (){
    await client.connect()
    console.log("database has connected successfully.")
    const database =  client.db(dbConst.dbName)
    return database
}

module.exports = {dbConnection}