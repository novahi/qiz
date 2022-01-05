const express = require('express')
const router = express.Router()
const signUpControllers = require('../app/controllers/SignUpControllers')
const middleware = require('../app/controllers/MiddlewareControllers')

router.get('/', signUpControllers.get)
router.post('/', signUpControllers.post)

module.exports = router