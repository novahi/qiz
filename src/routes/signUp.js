const express = require('express')
const router = express.Router()
const signUpControllers = require('../app/controllers/SignUpControllers')
const middleware = require('../app/controllers/MiddlewareControllers')

router.get('/',middleware.block, signUpControllers.get)
router.post('/',middleware.block, signUpControllers.post)

module.exports = router