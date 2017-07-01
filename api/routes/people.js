const express = require('express')
const Person = require('../models/person')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// index
router.get('/api/people', authMiddleware.authenticateJWT, (req, res) => {
  Person.find()
    .then((people) => {
      res.json(people)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// show single
router.get('/api/people/:id', (req, res) => {
  const id = req.params.id
  Person.findById(id)
    .then((person) => {
      res.json(person)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// create
router.post('/api/people', (req, res) => {
  newperson = req.body
  Person.create(newperson)
    .then((newperson) => {
      res.json(newperson)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})

// edit
router.patch('/api/people/:id', (req, res) => {
  const oldperson = person.findById(req.params.id)
  const updatedperson = req.body
  oldperson.update(updatedperson)
    .then(() => {
      res.json(updatedperson)
    })
    .catch((error) => {
      res.json({ error: error })
    })
})


module.exports = router