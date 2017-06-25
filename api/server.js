const express = require('express')
const bodyParser = require('body-parser')
const moviesRotuer = require('./routes/movies')

const server = express()

server.use(bodyParser.json())

server.use(moviesRotuer)

const port = 8888
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})