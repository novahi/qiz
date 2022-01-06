const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class SignUpControllers {
  async get (req, res) {
    return res.status(200).render("authentication/signup")
  }
  async post (req, res) {
    let id
    try {
    const formData = req.body
    const { password,username, ...other} = formData
    const validateUsername = username.toLowerCase().trim()
    const newUser = await User(other).save()
    id = newUser._id
    const newAccount = await new Account({
      password,username: validateUsername,id
    }).save()
    res.status(200).redirect('/login')
    } 
    catch (e) {
      if(id) {
        await User.deleteOne({_id: id})
        return res.status(404).json("Registration failed because the account already exists in the system!")
      } else {
        return res.status(500).json("Server Error !")
      }
    }
  }
}

module.exports = new SignUpControllers()