//dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const artController = require('./controllers/art.js')
const User = require('./models/users.js')
const usersController = require('./controllers/users.js')


//Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/' + `kickstart-me`



// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
//success
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


//CORS
// const whitelist = ['http://localhost:3000', 'https://derrickjfoster.github.io', 'https://kickstart-me.herokuapp.com/art', 'https://kickstart-me.herokuapp.com'] //heroku link
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//Middleware
// app.use(cors(corsOptions))
app.use(express.json())
app.use('/art', artController)
app.use('/users', usersController)
//deprecation
mongoose.set('useNewUrlParser', true);



//listening
app.listen(PORT, () => {
  console.log("Ground  Control to Major Tom on port:", PORT);
})

app.get('/', (req, res) => {
  res.redirect('/art')
})
