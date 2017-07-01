const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// sign in
router.post('/auth', authMiddleware.authenticateSignIn, authMiddleware.signtokenHandler)

// sign up
router.post('/auth/register', authMiddleware.register, authMiddleware.signtokenHandler)

module.exports = router