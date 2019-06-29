const express = require('express')
const art = express.Router()
const Art = require('../models/art.js')

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


module.exports = art
