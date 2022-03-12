const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const MongoDb = require('./config/db')
const route = require('./routes')
const app = express()
const port = process.env.PORT || 3000
const User = requir("./app/models/Account")
// Declare and use the dotenv . library
const dotenv = require('dotenv').config()
const passport = require("passport")
const FacebookStrategy = require('passport-facebook');
// Use static folder
passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: "http://localhost:3000/login/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function(err, user) {
      return cb(err, user);
    });
  }
));


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Working with Cookies
app.use(cookieParser())


// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resrc', 'views'))

// Edit the Client-side upload method to the Server
app.use(methodOverride('_method'))
// Routes init
route(app)

// Start the Server and Connect with MongoDb
app.listen(port, MongoDb.connect(port))
