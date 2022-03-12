const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class LoginControllers {
  async get (req, res) {
    res.status(200).render("authentication/login")
  }
  async post (req, res) {
    
  }
}

module.exports = new LoginControllers()
