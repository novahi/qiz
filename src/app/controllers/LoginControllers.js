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
        return res.status(403).json("Incorrect username information !")
      }
      if (userData.password !== password) {
        return res.status(403).json("Incorrect password information!")
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
        res.status(200).redirect('/users')
      }
    } catch (e) {
      res.status(404).json("Server Error !")
    }
  }
}

module.exports = new LoginControllers()