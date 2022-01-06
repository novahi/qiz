const express = require('express')
const router = express.Router()
const userControllers = require('../app/controllers/UserControllers')
const middleware = require('../app/controllers/MiddlewareControllers')


router.get("/", middleware.check, userControllers.view)



module.exports = router