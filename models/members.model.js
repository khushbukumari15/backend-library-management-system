const { ObjectId} = require('mongodb')
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

const deleteMember = async function (id){
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.membersCollectionName)
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

const editMemberDetails = async function(id, updatedQuery){
    try{
        const dbCall = await dbModel.dbConnection()
        const collection = dbCall.collection(dbConst.membersCollectionName)
        const filter = {_id: new ObjectId(id)}
        const updateMember = {$set: updatedQuery}
        const result = await collection.updateOne(filter, updateMember)

        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
          );
        
        if(result.modifiedCount > 0) {
            return resConst.updateSuccess
        }
        else{
            return resConst.missingDocument
        } 
    }
    catch(error){
        console.error("update book error: ", error);
        return resConst.internalServerError
    }
    finally{}

}

module.exports = {
    registration,
    listAllMembers,
    deleteMember,
    editMemberDetails
}