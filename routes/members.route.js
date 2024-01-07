const express = require('express');
const router = express.Router();
const memberController = require('../controllers/members.controllers')

router.post('/registration',memberController.registrationDetail)
router.get('/members', memberController.getAllMembers)

module.exports = router