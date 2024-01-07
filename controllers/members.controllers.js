const memberService = require('../services/members.services')

const registrationDetail = async function(req, res){
    const details = req.body
    const registrationInfo = await memberService.registrationValidations(details)
    res.send(registrationInfo)
} 

module.exports = {
    registrationDetail,
}