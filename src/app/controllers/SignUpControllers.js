const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class SignUpControllers {
  async get (req, res) {
    return res.status(200).json("Controllers Sign Up ! Post Data on this uri and method Post")
  }
  async post (req, res) {
    const formData = req.body
    const { password,username, ...other} = formData
    const validateUsername = username.toLowerCase().trim()
    const newAccount = await new Account({
      password,username: validateUsername
    })
    res.status(200).json(newAccount)
  }
}

module.exports = new SignUpControllers()