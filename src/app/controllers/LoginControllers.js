const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class LoginControllers {
  async get(req, res) {
    return res.status(200).render('authentication/login')
  }
  async post(req, res) {
    try {
      const password = req.password
      const username = req.username
      const userData = await Account.findOne({
        username
      })
      if (!userData) {
        return res.status(403).render('/authentication/login', {
          message: "Invalid username !"
        })
      }
      if (userData.password !== password) {
        return res.status(403).render('authentication/login', {
          message: "Invalid password !"
        })
      }
      if (userData && userData.password == password) {
        const accessToken = jwt.sign({
          id: userData.id,
          role: userData.role
        }, process.env.JWT_SECRET, {
          expiresIn: "30m"
        })
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          path: "/",
          //sameSite: "strict",
          secure: false
        })
        res.status(200).json({
          "message": "Logged in successfully !",
          "status": true,
        })
        return res.status(200).redirect('/users')
      }
    }
    catch (e) {
      console.log(e)
      res.status(404).render('authentication/signup', {
        message: "Bad Request !"
      })
    }
  }
}

module.exports = new LoginControllers()
