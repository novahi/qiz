const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const MongoDb = require('./config/db')
const route = require('./routes/authentication')
const app = express();
const port = process.env.PORT || 4000;
// Using dotenv 
const dotenv = require('dotenv').config()

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect with MongoDB

MongoDb.multiConnect()


// Working with Cookies
app.use(cookieParser())


// Template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resrc', 'views'));

// Routes init
route(app);

// Start the Server
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
