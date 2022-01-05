const mongoose = require('mongoose')
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
console.log(__dirname)
mongose.connect(USER_URI, options)
.then(() => console.log("Connection Successfully! (User)"))
.catch(e => console.log("Connection Fail (User)!"))

mongoose.account = mongose.createConnection(ACCOUNT_URI, options)
  .then(() => console.log("Connection Successfully! (Account)"))
  .catch(e => console.log("Connection Fail (Account)!"))

module.exports = mongoose
