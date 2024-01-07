const memberModel = require('../models/members.model')
const resConst = require('../constants/res.constants')

const registrationValidations = function (userInfo) {
  if (!userInfo.fullName || !userInfo.mobileNumber || !userInfo.password) {
    return resConst.missingFieldValidationError
  }

  if (isNaN(userInfo.mobileNumber)) {
    return resConst.nanMobileValidation
  }

  if (userInfo.mobileNumber.length != 10) {
    return resConst.mobileNumberLenghtValidation
  }

  if (userInfo.password.length < 8 || userInfo.password.length > 20) {
    return resConst.passwordValidation
  }

  return memberModel.registration(userInfo)
}

const getAllMembersValidations = function (){
  return memberModel.listAllMembers()   
}

module.exports = {
  registrationValidations,
  getAllMembersValidations,
}
