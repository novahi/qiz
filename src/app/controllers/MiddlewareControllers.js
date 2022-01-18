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
      } 
      else {
        req.userId = id
        next()
      }
    }
    catch (e) {
      console.log(e)
      res.status(403).json({
        message: "You are not authorized to perform this action. Please try again later !",
        status: false
      })
    }
  }
  validate(req, res, next) {
    const formData = req.body
    let {password} = formData
    let username = formData.username.toLowerCase()
    req.username = username
    req.password = password
    next()
  }
  block (req, res, next) {
    const token = req.cookies.accessToken
    if(token) {
      return res.status(401).redirect('back')
    } 
    else {
      next()
    }
  }
}

module.exports = new Middleware()