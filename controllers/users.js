const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

//create user
router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (error, newUser) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    res.status(200).json(
      {
        id:newUser._id,
        username: newUser.username
    }
  )
  })
})

//log in
// router.post('/login', (req, res) => {
//   User.findOne({username: request.body.username}, (err, foundUser) => {
//     if (err) {
//       console.log(err)
//       res.status(400).json({error: err.message})
//     } else if (!foundUser) {
//       res.status(400).json({error: err.message})
//     } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//       req.body.username: foundUser.username
//     }
//   })
// })


module.exports = router;
