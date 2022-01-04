const loginRoute = require('./login')
const signUpRoute = require('./signUp')


function route(app) {
  app.use('/login', loginRoute)
  app.use('/signup', signUpRoute)
}

module.exports = route