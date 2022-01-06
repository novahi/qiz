const User = require('../models/User')
const jwt = require('jsonwebtoken')

class SiteControllers {
  async home(req, res) {
    return res.status(200).render('home')
  }
  
}

module.exports = new SiteControllers()