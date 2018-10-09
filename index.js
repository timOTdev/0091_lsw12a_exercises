const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.send("It's Alive")
})

// GET COURSES
server.get('/api/courses', (req, res) => {
  db('courses')
    .then(courses => res.status(200).json(courses))
    .catch(err => res.status(500).json(err))
})

// CREATE COURSES
server.post('/api/courses', (req, res) => {
  const course = req.body

  db.insert(course)
    .into('courses')
    .then(ids => res.status(201).json(ids))
    .catch(err => res.status(500).json(err))
})

// UPDATE COURSES

// DELETE COURSES

server.listen(9000, () => console.log('\nAPI running on 9k\n'))