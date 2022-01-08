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
      return res.status(403).json(e)
    }
  }
  async detail (req, res) {
    try {
      const id = req.userId
      const slug = req.params.slug
      const [user, data] = await Promise.all([User.findOne({slug}).lean(),User.findById(id).lean()])
      res.status(200).render("user/detail", {
        user,data
      })
    } 
    catch (e) {
      res.status(403).json(e)
    }
  }
  async edit (req, res) {
    try {
      const id = req.userId
      const _id = req.params.id
      const [user, data] = await Promise.all([User.findOne({_id}), User.findById(id)])
      res.status(200).render('user/edit')
    } 
    catch (e) {
      res.json(e)
    }
  }
  async update (req, res) {
    try {
      const id = req.userId
      const _id = req.params.id
      const formData = req.body
      if(id === _id) {
        const update = await User.updateOne({_id}, formData)
        return res.status(200).json("Update Successfully! ")
      } else {
        return res.json("You are not authorized ")
      }
    } 
    catch (e) {
      return res.json(e)
    }
  }
  async delete (req, res) {
    try {
      const id = req.userId
      const _id = req.params.id
      if (id === _id) {
        const deleted = await Promise.all([User.deleteOne({ _id }), Account.deleteOne({ id })])
        res.clearCookie("accessToken")
        return res.status(200).redirect('/login')
        }
      }
      catch (e) {
        return res.json(e)
      }
    } 
}

module.exports = new UserControllers()