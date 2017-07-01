const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const jwtSecret = 'SECRET!'
const jwtAlgorithm = 'HS256'

// Create a valid JWT
function signtokenHandler(req, res) {
  const user = req.user
  const token = jwt.sign(
    {
      email: user.email
    },
    jwtSecret,
    { 
      subject: user._id.toString(),
      algorithm: jwtAlgorithm,
      expiresIn: '6h'
    }
  )
  res.json({ token: token })
}

// Add local strategy
passport.use(User.createStrategy())

// Add JWT strategy (json web token)
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: jwtSecret,
      // Authorization: JWT [token]
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
      algorithms: [jwtAlgorithm]
    },
    // Called when a valid token is found
    // It decode the token payload for us
    (jwtPayload, done) => {
      const userID = jwtPayload.sub // Used ID is the subject
      // Look up the user in our database
      User.findById(userID)
        .then(user => {
          // User was found
          if (user) {
            done(null, user)
          }
          // No user was found
          else {
            done(null, false)
          }
        })
        .catch(error => {
          done(new Error(`Issue fetching user with ID: ${userID}`), false)
        })
    }
  )
)



// Register new user
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
  authenticateJWT: passport.authenticate('jwt', {session: false}),
  register: registerMiddleware,
  signtokenHandler: signtokenHandler
}