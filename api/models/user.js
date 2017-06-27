const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('mongoose')
require('./init')

const userSchema = mongoose.Schema({})

userSchema.plugin(passportLocalMongoose , {
  usernameField: 'email',
  usernameLowerCase: true, // Emails are case insensitive
  sessions: false // Using jwt not seesionsL
});

const User = mongoose.model('User', userSchema)

module.exports = User