const mongoose = require('mongoose')

class MongooDb {
  async connect(url) {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log(`Connection to Database ${this.name} Successfully !`)
    } catch (error) {
      console.log('Connection to Database Failed !')
    }
  }
}

module.exports = new MongooDb()
