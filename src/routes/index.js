const siteRoute = require('./site')
const loginRoute = require('./login')
const signUpRoute = require('./signUp')
const userRoute = require('./user')
const logoutRoute = require('./logout')

function route (app) {
  app.use('logout', logoutRoute)
  app.use('/users', userRoute)
  app.use('/login', loginRoute)
  app.use('/signup', signUpRoute)
  app.use('/', siteRoute)
}

module.exports = route