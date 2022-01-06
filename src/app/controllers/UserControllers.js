const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class UserControllers {
  async view (req, res) {
    try {
      const user = await User.find({}).lean()
      return res.status(200).render('user/views', {
        user
      })
    } catch (e) {
      return res.status(403).json("Sorry the server can't find any users at the moment ! Please try again later x.x")
    }
  }
  
}

module.exports = new UserControllers()