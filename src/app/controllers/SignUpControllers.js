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
    other.image = `https://graph.facebook.com/${req.body.facebook.trim()||100003520850408}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
    const validateUsername = username.toLowerCase().trim()
    const newUser = await User(other).save()
    id = newUser._id
    const newAccount = await new Account({
      password,username: validateUsername,id
    }).save()
    res.status(201).redirect('/login')
    } 
    catch (e) {
      if(id) {
        await User.deleteOne({_id: id})
        return res.status(406).json("Registration failed because the account already exists in the system!")
      } else {
        return res.status(500).json("Server Error !")
      }
    }
  }
}

module.exports = new SignUpControllers()