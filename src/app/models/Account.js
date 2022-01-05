const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.plugin(slug);

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
},
{
   timestamps: true,
   versionKey: false
 })

module.exports = connect.model('accounts', Account)