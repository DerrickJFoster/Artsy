const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')


router.post('/', (req, res) => {
  User.create(req.body, (err, newUser) => {
    console.log(newUser)
    res.redirect('/art')
  })
})

module.exports = router;
