const express = require('express')
const router = express.Router()
const logoutControllers = require('../app/controllers/LogoutControllers')
const middleware = require('../app/controllers/MiddlewareControllers')

router.get('/',middleware.check, logoutControllers.get)

module.exports = router