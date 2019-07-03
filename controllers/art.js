const express = require('express')
const art = express.Router()
const Art = require('../models/art.js')

//INDEX
art.get('/:id', (req, res) => {
  Art.find({userid: req.params.id}, (error, foundArt) => {
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

//UPDATE
art.put('/:id', (req, res) => {
  Art.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updateArt) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    res.status(200).json(updateArt)
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
