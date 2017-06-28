const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// sign in
router.post('/auth', authMiddleware.authenticateSignIn, (req, res) => {
  res.json({ success: true })
})

// sign up
router.post('/auth/register', authMiddleware.register, (req, res) => {
  res.json({ user: req.user })
})

module.exports = router