const express = require('express');
const router = express.Router();
const memberController = require('../controllers/members.controllers')

router.post('/addMember',memberController.registrationDetail)
router.get('/members', memberController.getAllMembers)
router.delete('/members/:id', memberController.memberDelete)
router.put('/members/:id', memberController.updatingMember)

module.exports = router