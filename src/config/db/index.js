const mongoose = require('mongoose')
require('dotenv').config()
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
class MongoDb {
  async connect() {
    try {
      await mongoose.connect(process.env.USER_URI, options)
      console.log(`Connection Successfully! (User)`)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
}

module.exports = new MongoDb()