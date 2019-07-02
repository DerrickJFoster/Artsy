const mongoose = require('mongoose')
const Schema = mongoose.Schema

//art model
const artSchema = new Schema ({
  title: String,
  artist: String,
  imageurl: String,
  year: String,
  usernotes: String,
  userid: String,
}, {timestamps: true})

const Art = mongoose.model('Art', artSchema)


//dont touch
module.exports = Art
