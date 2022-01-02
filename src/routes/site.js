const express = require('express')
const route = express.Route()
const homeControllers = require('../controllers/HomeControllers')

route.get('/', homeControllers.home)