const express = require('express')
const router = express.Router()
const loginControllers = require('../app/controllers/LoginControllers')
const middleware = require('../app/controllers/MiddlewareControllers')

router.get('/', loginControllers.get)
router.post('/',middleware.validate, loginControllers.post)

module.exports = router