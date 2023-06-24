const express = require('express')
const helmet = require('helmet')
const coursesRoutes = require('./coursesRoutes/coursesRoutes.js')
const server = express()

server.use(helmet())
server.use(express.json())

// GET ROOT
server.get('/', (req, res) => {
  res.send("It's Alive")
})

server.use('/api/courses', coursesRoutes)

server.listen(9000, () => console.log('\nAPI running on 9k\n'))