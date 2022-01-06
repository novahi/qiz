const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const User = new Schema({
  name: {
    type: String,
    min: 3,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  facebook: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    default: null,
    
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true,
  },
  image: {
    type: String,
    default: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.30497-1/c379.0.1290.1290a/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=jvAYwpSl2jEAX99D9GE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sin6-1.xx&oh=00_AT_Cm-RaR9k5AIpD_Bc0LRQSF2IahIiHDq0TTvSeeLYMRg&oe=61F66238'
  },
  cover: {
    type: String,
    default: "https://picsum.photos/1000/1000"
  }
}, {
  timestamps: {
    currentTime: () => Date().toLocaleString("vi-VI", {
      timeZone: "Asia/Ho_Chi_Minh"
    })
  },
  versionKey: false
})

module.exports = mongoose.model('users', User)