const mongoose = require('mongoose')

class MongooDb {
  async connect() {
    try {
      await mongoose.connect(process.env.USER_URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log(`Connection to Database (Users) Successfully !`)
    } catch (error) {
      console.log('Connection to Database Failed !')
    }
  }
  async multiConnect() {
    try {
      await mongoose.connect(process.env.Account_URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log(`Connection to Database (Accounts) Successfully !`)
    } catch (error) {
      console.log('Connection to Database Failed !')
    }
  }
}

module.exports = new MongooDb()
