const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class Middleware {
  //Check if the user is logged in or not, if not, it must be logged in
  
  async check (req, res, next) {
    try {
      const token = req.cookies.accessToken
      if (!token) {
        return res.status(403).redirect('/login')
      }
      const decode = jwt.verify(token,process.env.JWT_SECRET)
      const id = decode.id 
      if(!id) {
        return res.status(403).redirect('/')
      } else {
        req.userId = id
        next()
      }
    } catch (e) {
      res.status(403).json("message": "You are not authorized to perform this action. Please try again later !"
      )
    }
  }
  validate(req, res, next) {
    const formData = req.body
    const {password} = formData
    const username = formData.username.toLowerCase()
    req.username = username
    req.password = password
    next()
  }
}

module.exports = new Middleware()