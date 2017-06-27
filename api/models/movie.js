const mongoose = require('mongoose')
require('./init')


const peopleRoleSchema= [{
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  },
  role: String
}]

const movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  cast: peopleRoleSchema,
  directors: peopleRoleSchema
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
