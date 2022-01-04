const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Account = new Schema({
  username: {
    type: String,
    min: 4,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  id: {
    type: String,
    unique: true,
    default: null
  }
},
{
   timestamps: {
     currentTime: () => Date().toLocaleString("vi-VI", {
       timeZone: "Asia/Ho_Chi_Minh"
     })
   },
   versionKey: false
 })

module.exports = mongoose.Model('accounts', Account)