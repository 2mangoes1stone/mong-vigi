const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

// index
router.get('/api/movies', (req, res) => {
  Movie.find()
    .populate('cast.person')
    .populate('directors.person')
    .then((movies) => {
      res.json(movies)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// show single
router.get('/api/movies/:id', (req, res) => {
  const id = req.params.id
  Movie.findById(id)
    .populate('cast.person')
    .populate('directors.person')
    .then((movie) => {
      res.json(movie)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// create
router.post('/api/movies', (req, res) => {
  newMovie = req.body
  Movie.create(newMovie)
    .then((newMovie) => {
      res.json(newMovie)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// edit
router.patch('/api/movies/:id', (req, res) => {
  const oldMovie = Movie.findById(req.params.id)
  const updatedMovie = req.body
  oldMovie.update(updatedMovie)
    .then(() => {
      res.json(updatedMovie)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// Delete
router.delete('/api/movies/:id', (req,res) => {
  const movie = Movie.findById(req.params.id)
  movie.remove()
    .then(() => {
      res.send('Movie Deleted')
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})


module.exports = router