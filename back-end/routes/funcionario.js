const controller = require('../controllers/funcionario')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)

module.exports = router