const mongoose = require('mongoose')
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
  // async multiConnect() {
  //   try {
  //     const connect = await mongoose.connect(process.env.ACCOUNT_URI, options)
  //     console.log(`Connection Successfully! (Account)`)
  //     return connect
  //   } catch (error) {
  //     console.log(`Error: ${error}`)
  //   }
  // }
}

module.exports = new MongoDb()