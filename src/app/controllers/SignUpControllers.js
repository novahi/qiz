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
    const idFb = other.facebook
    other.image = `https://graph.facebook.com/${idFb.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.ACCESSTOKEN_FB}`
    const validateUsername = username.toLowerCase().trim()
    const newUser = await User(other).save()
    id = newUser._id
    const newAccount = await new Account({
      password,username: validateUsername,id
    }).save()
    res.status(201).json({
      "message": "Sign up successfully!",
      "status": true
    })
    return res.status(200).redirect('/login')
    } 
    catch (e) {
      console.log("SignUp "+ e)
      if(id) {
        await User.deleteOne({_id: id})
        return res.status(403).render('authentication/signup', {
          message: "Username already exists in the system, please use another name"
        })
      } else {
        return res.status(500).render('authentication/signup', {
          message: "Server error, please register later! "
        })
      }
    }
  }
}

module.exports = new SignUpControllers()


