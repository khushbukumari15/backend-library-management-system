const memberService = require('../services/members.services')

const registrationDetail = async function(req, res){
    const details = req.body
    const registrationInfo = await memberService.registrationValidations(details)
    res.send(registrationInfo)
} 

const getAllMembers = async function(req, res){
    const getMembers = await memberService.getAllMembersValidations()
    res.send(getMembers )

}

const memberDelete = async function(req, res){
    const findId = req.params.id
    const deleteCall = await memberService.deleteMemberValidation(findId)
    res.send(deleteCall)
}

const updatingMember = async function(req, res){
    const dataToUpdate = req.body
    console.log(dataToUpdate)
    const update = await memberService.updateMemberValidation(req.params.id ,dataToUpdate)
    res.send(update)
}

module.exports = {
    registrationDetail,
    getAllMembers,
    memberDelete,
    updatingMember
}