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
      console.log("(views) "+e)
      return res.status(403).json({
        "message": "The server has a problem and can't find the user",
        "status": "error"
      })
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
      console.log("(detail) "+e)
      return res.status(403).json({
        "message": "The server has a problem and can't find the user",
        "status": "error"
      })
    }
  }
  async edit (req, res) {
    try {
      const id = req.userId
      const _id = req.params.id
      const [user, data] = await Promise.all([User.findOne({_id}), User.findById(id)])
      res.status(200).render('user/edit', {
        user, data
      })
    } 
    catch (e) {
      console.log("(edit) "+e)
      return res.status(403).json({
        "message": "The server has a problem and can't find the user",
        "status": "error"
      })
    }
  }
  async update (req, res) {
    try {
      const id = req.userId
      const _id = req.params.id
      const formData = req.body
      formData.image = `https://graph.facebook.com/${formData.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.ACCESSTOKEN_FB}`
      if(id === _id) {
        const update = await User.findOneAndUpdate({_id}, formData)
        return res.status(201).redirect('/users')
      } else {
        return res.status(403).json({
          "message": "You do not have permission to perform this action !",
          "status": "error"
        })
      }
    } 
    catch (e) {
      console.log("(update) "+e)
      return res.status(403).json({
        "message": "Unable to change the data there was some problem !",
        "status": "error"
      })
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
        else {
          return res.status(403).json({
            "message": "You do not have permission to perform this action !",
            "status": "error"
          })
        }
      }
      catch (e) {
        console.log("(delete) " +e)
        return res.status(403).json({
          "message": "Can't delete data there was some problem !",
          "status": "error"
        })
      }
    } 
}

module.exports = new UserControllers()