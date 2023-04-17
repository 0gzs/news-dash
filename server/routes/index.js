const express = require('express')
const controllers = require('../controllers')
const router = express.Router()

router.route('/checkImage').post(controllers.checkImage)

module.exports = router
