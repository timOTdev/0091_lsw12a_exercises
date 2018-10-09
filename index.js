const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
const server = express()

server.use(helmet())
server.use(express.json())

// GET ROOT
server.get('/', (req, res) => {
  res.send("It's Alive")
})

// GET COURSES
server.get('/api/courses', (req, res) => {
  db('courses')
    .then(courses => res.status(200).json(courses))
    .catch(err => res.status(500).json(err))
})

//  GET COURSE BY ID
server.get('/api/courses/:id', (req, res) => {
  const { id } = req.params
  // regular method
  db('courses')
    .where({ id })
    .then(course => res.status(200).json(course))
    .catch(err => res.status(404).json(err))

  // async method, needs async next to homies
  // try {
  //   const course = await db('courses').where({id}).first()
  //   if (course) {
  //     res.status(200).json(course)
  //   }
  //   else {
  //     res.status(404).json({ message: 'Course not found' })
  //   }
  // }
  // catch (err) {res.status(500).json(err)}
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
server.put('/api/courses/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body
  db('courses')
    .where({ id })
    .update(changes)
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json(err))
})

// DELETE COURSES

server.listen(9000, () => console.log('\nAPI running on 9k\n'))