const express = require('express')
const router = express.Router()
const userControllers = require('../app/controllers/UserControllers')
const middleware = require('../app/controllers/MiddlewareControllers')

router.put('/:id', middleware.check, userControllers.update)
router.delete('/:id', middleware.check, userControllers.delete)
router.get('/:id/edit', middleware.check, userControllers.edit)
router.get('/:slug', middleware.check, userControllers.detail)
router.get('/', middleware.check, userControllers.view)



module.exports = router