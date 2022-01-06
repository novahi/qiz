const mongoose = require('mongoose')
const Schema = mongoose.Schema;
require('dotenv').config()
//Connect to User Accounts Database
const connect = mongoose.createConnection(process.env.ACCOUNT_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
  },
  role: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    currentTime: () => Date().toLocaleString("vi-VI", {
      timeZone: "Asia/Ho_Chi_Minh"
    })
  },
  versionKey: false
})

module.exports = connect.model('accounts', Account)