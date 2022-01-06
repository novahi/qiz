const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class UserControllers {
  async view (req, res) {
    res.status(200).render("user/views")
  }
  
}

module.exports = new UserControllers()