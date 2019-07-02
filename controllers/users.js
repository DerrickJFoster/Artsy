const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

//create user
router.post('/', (req, res) => {
  User.create(req.body, (error, newUser) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    res.status(200).json(newUser)
  })
})

module.exports = router;
