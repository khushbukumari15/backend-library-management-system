const healthService = require('../services/health.services')

const get = function (req, res){
    res.send(healthService.get())
}

module.exports = {get}