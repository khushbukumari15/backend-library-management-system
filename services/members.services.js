const memberModel = require('../models/members.model')
const resConst = require('../constants/res.constants')

const registrationValidations = function (userInfo) {
  if (!userInfo.fullName || !userInfo.mobileNumber || !userInfo.memberId) {
    return resConst.missingFieldValidationError
  }

  if (isNaN(userInfo.mobileNumber) || isNaN(userInfo.memberId)) {
    return resConst.nanMobileValidation
  }

  if (userInfo.mobileNumber.length != 10) {
    return resConst.mobileNumberLenghtValidation
  }

  return memberModel.registration(userInfo)
}

const getAllMembersValidations = function (){
  return memberModel.listAllMembers()   
}

const deleteMemberValidation = function(id){
  return memberModel.deleteMember(id)
}

const updateMemberValidation = function(id, query){
  if(!id){
    return resConst.idMissing
  }
  if(!query.memberId || !query.fullName || !query.mobileNumber){
      return resConst.missingFieldValidationError
  }
  if (isNaN(query.mobileNumber) || isNaN(query.memberId)) {
    return resConst.nanMobileValidation
  }
  
  if (query.mobileNumber.length != 10) {
    return resConst.mobileNumberLenghtValidation
  }
  return memberModel.editMemberDetails(id, query)
}

module.exports = {
  registrationValidations,
  getAllMembersValidations,
  deleteMemberValidation,
  updateMemberValidation
}
