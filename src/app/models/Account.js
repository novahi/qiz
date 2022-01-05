const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const conn = mongoose.createConnection(process.env.ACCOUNT_URI, {
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
  }
},
{
   timestamps: true,
   versionKey: false
 })

module.exports = conn.Model('accounts', Account)