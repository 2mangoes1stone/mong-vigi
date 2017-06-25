const mongoose = require('mongoose')
require('./init')

const movieSchema = mongoose.Schema({
  title: String,
  year: Number
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
