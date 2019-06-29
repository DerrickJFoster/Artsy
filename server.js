//dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const artController = require('./controllers/art.js')
const session = require('express-session')

//Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI



// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
//success
mongoose.connect('mongodb://localhost:27017/kickstART', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


//CORS
// const whitelist = ['http://localhost:3000'] //heroku link
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
app.use(session({
  secret: 'randomstring',
  resave: false,
  saveUnititalized: false
}))


//listening
app.listen(PORT, () => {
  console.log("Ground  Control to Major Tom on port:", PORT);
})
