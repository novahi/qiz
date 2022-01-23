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
      let { password,username, ...other} = formData
      const idFb = other.facebook
      other.image = `https://graph.facebook.com/${idFb.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.ACCESSTOKEN_FB}`
      username = username.toLowerCase().trim()
      const newUser = await User(other).save()
      id = newUser._id
      const newAccount = await new Account({
        password,
        username,
        id
      }).save()
      return res.status(200).json({
        message: "Sign Up Successfully! ",
        status: true,
        redirect: "/login"
      })
    } 
    catch (e) {
      console.log("SignUp "+ e)
      if(id) {
        await User.deleteOne({_id: id})
        return res.status(403).json({
          message: "Username already exists in the system, please use another name",
          status: false
        })
      } 
      else {
        return res.status(500).json({
          message: "Server error, please register later!",
          status: false
        })
      }
    }
  }
}

module.exports = new SignUpControllers()


