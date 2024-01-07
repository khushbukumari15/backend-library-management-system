const express = require('express');
const router = express.Router();
const memberController = require('../controllers/members.controllers')

router.post('/registration',memberController.registrationDetail)

module.exports = router