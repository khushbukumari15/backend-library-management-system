const express = require('express');
const router = express.Router();
const healthController = require('../controllers/health.controllers')

router.get('/health', healthController.get )

module.exports = router