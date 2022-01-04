const mongoose = require('mongoose')

async multipConnect(url) {
  try {
    await mongoose.createConnection(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connection to Database ${this.name} Successfully !`)
  } catch (e) {
    console.log('Connection to Database Failed !')
  }
}
