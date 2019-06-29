const express = require('express')
const art = express.Router()
const Art = require('../models/art.js')
const User = require('../models/users.js')

//INDEX
art.get('/', (req, res) => {
  Art.find({}, (error, foundArt) => {
    if (error) {
      res.status(400).json({error: err.message})
    }
    res.status(200).json(foundArt)
  })
})


//CREATE
art.post('/', (req, res) => {
  Art.create(req.body, (error, createArt) => {
    if (error) {
      res.status(400),json({error: error.message})
    }
    res.status(200).json(createArt)
  })
})

//DELETE
art.delete('/:id', (req, res) => {
  Art.findByIdAndRemove(req.params.id, (error, deleteArt) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    res.status(200).json(deleteArt)
  })
})

module.exports = art
