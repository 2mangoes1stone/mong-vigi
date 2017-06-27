const passport = require('passport')
const User = require('../models/user')

passport.use(User.createStrategy())

function registerMiddleware(req, res, next) {
  const user = new User({
    email: req.body.email
  })
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error)
      return
    }
    req.user = user
    next()
  })
}

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', {session: false}),
  register: registerMiddleware
}