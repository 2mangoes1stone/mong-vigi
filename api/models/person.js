const mongoose = require('mongoose')
require('./init')

const personSchema = mongoose.Schema({
  firstname: String,
  lastname: String
})

const User = mongoose.model('Person', personSchema)

module.exports = User