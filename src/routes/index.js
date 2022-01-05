const siteRoute = require('./site')
const loginRoute = require('./login')
const signUpRoute = require('./signUp')


function route (app) {
  app.use('/login', loginRoute)
  app.use('/signup', signUpRoute)
  app.use('/', siteRoute)
}

module.exports = route