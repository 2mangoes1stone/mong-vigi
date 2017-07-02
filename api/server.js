require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authMiddleware = require('./middleware/auth')
const moviesRotuer = require('./routes/movies')
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

const server = express()

server.use(bodyParser.json())
// connect passport to express
server.use(authMiddleware.initialize)
// CORS
server.use(cors({
  origin: process.env.CORS_ORIGINS.split(',')
}))

server.use(moviesRotuer)
server.use(peopleRouter)
server.use(authRouter)

const port = 8888
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})