const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')




// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/kickstART', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


app.get('/kickstART', (req, res) => {
  res.send("Major Tom to Ground Control")
})


//listening
app.listen(PORT, () => {
  console.log("Ground  Control to Major Tom on port:", PORT);
})
