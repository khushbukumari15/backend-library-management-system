const healthModel = require('../models/health.models')

const get = function () {
    return healthModel.status()
}

module.exports = {get}