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

module.exports = {
    registrationDetail,
    getAllMembers
}