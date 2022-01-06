const siteRoute = require('./site')
const loginRoute = require('./login')
const signUpRoute = require('./signUp')
const userRoute = require('./user')


function route (app) {
  app.use('/users', userRoute)
  app.use('/login', loginRoute)
  app.use('/signup', signUpRoute)
  app.use('/', siteRoute)
}

module.exports = route