const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const MongoDb = require('./config/db')
const route = require('./routes')
const app = express()
const port = process.env.PORT || 3000
// Declare and use the dotenv . library
const dotenv = require('dotenv').config()

// Use static folder
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect with MongoDB

MongoDb.connect()

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

// Start the Server
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
)
