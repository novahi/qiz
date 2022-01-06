const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class UserControllers {
  async view (req, res) {
    try {
      const id = req.userId
      const [user, data] = await Promise.all([User.find({}).lean(), User.findById(id).lean()])
      return res.status(200).render('user/views', {
        user,data
      })
    } 
    catch (e) {
      return res.status(403).json("Sorry the server can't find any users at the moment ! Please try again later x.x")
    }
  }
  async detail (req, res) {
    try {
      const id = req.userId
      const slug = req.parasm.slug
      const [user, data] = await Promise.all([User.findOne({slug}).lean(),User.findById(id).lean()])
      res.status(200).render("user/detail", {
        user,data
      })
    } 
    catch (e) {
      res.status(403).json("Không tìm thấy người dùng !")
    }
  }
}

module.exports = new UserControllers()