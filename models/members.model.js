const dbModel = require('./db.model')
const dbConst = require('../constants/db.constants')
const resConst = require('../constants/res.constants')

const registration = async function (memberDoc) {
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.membersCollectionName)
        const detail = await collection.findOne({ "mobileNumber": memberDoc.mobileNumber})
        if(detail){
            return resConst.registrationExists
        }
        else{
            const register = await collection.insertOne(memberDoc) 
            return resConst.registrationSuccess
        }
    }
    catch(error){
        console.error("registration error:", error)
        return resConst.internalServerError
    }
    finally{
    }
}

const listAllMembers = async function () {
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.membersCollectionName)
        const query = {}
        const allMembers = collection.find(query)
        
        if ((await collection.countDocuments(query))===0){
            return resConst.missingDocument
        }

        const membersArray = []
        for await(const doc of allMembers){
            membersArray.push(doc)
        }
        return membersArray
    }
    catch (error) {
        console.error("listing book error: ", error);
        return resConst.internalServerError
      }
    finally{
        // await client.close();
    }
}

module.exports = {
    registration,
    listAllMembers,
}