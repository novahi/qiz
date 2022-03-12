const mongoose = require('mongoose')
require('dotenv').config()
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
class MongoDb {
  async connect(port) {
    try {
      await mongoose.connect(process.env.USER_URI, options)
      console.log(`Connection with Database Successfully!`)
      console.log(`Server start on Port: ${port}`)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
}

module.exports = new MongoDb()
