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

module.exports = {
    registration,
}