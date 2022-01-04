const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class LoginControllers {
  async get(req, res) {
    return res.status(200).render('home')
  }
  async post(req, res) {
    try {
      const password = req.password
      const username = req.username
      const userData = await Account.findOne({
        username
      })
      if (!userData) {
        return res.status().json("Incorrect account information !")
      }
      if (userData.password !== password) {
        return res.status().json("Incorrect password information!")
      }
      if (userData && userData.password == password) {
        const accessToken = jwt.sign({
          id: userData.id
        }, process.env.JWT_SECRET, {
          expiresIn: "30m"
        })
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          path: "/",
          sameSite: "strict",
          secure: false
        })
        res.status(200).redirect('/')
      }
    } catch (e) {

    }
  }
}

module.exports = new LoginControllers()