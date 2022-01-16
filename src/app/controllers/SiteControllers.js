const User = require('../models/User')
const jwt = require('jsonwebtoken')

class SiteControllers {
  async home(req, res) {
    return res.render('home')
  }
  
}

module.exports = new SiteControllers()