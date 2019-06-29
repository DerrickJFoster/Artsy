const express = require('express')
const art = express.Router()
const Art = require('../models/art.js')

art.post('/', (req, res) => {
  Art.create(req.body, (err, createArt) => {
    if (err) {
      res.status(400),json({error: err.message})
    }
    res.status(200).json(createArt)
  })
})


module.exports = art
