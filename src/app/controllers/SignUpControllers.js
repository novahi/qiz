const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class SignUpControllers {
  async get (req, res) {
    return res.status(200).render('signup')
  }
  async post (req, res) {
    const formData = req.body
    const { password,username, ...other} = formData
    const validateUsername = username.toLowerCase().trim()
    const newAccount = await new Account({
      password,username: validateUsername
    })
  }
}

module.exports = new SignUpControllers()