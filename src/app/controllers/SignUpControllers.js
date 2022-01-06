const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class SignUpControllers {
  async get (req, res) {
    return res.status(200).json("Controllers Sign Up ! Post Data on this uri and method Post")
  }
  async post (req, res) {
    try {
    let id
    const formData = req.body
    const { password,username, ...other} = formData
    const validateUsername = username.toLowerCase().trim()
    const newUser = await User(other).save()
    id = newUser._id
    const newAccount = await new Account({
      password,username: validateUsername,id
    }).save()
    res.status(200).json(newAccount)
    } 
    catch (e) {
      if(id) {
        await User.deleteOne({_id: id})
        return res.status(404).json("Sign Up Error !")
      } else {
        return res.status(500).json("Server Error !")
      }
    }
  }
}

module.exports = new SignUpControllers()