const mongoose = require('mongoose')
const Schema = mongoose.Schema

//user model
const userSchema = new Schema({
  username:{type: String, required: true},
  password:{type: String, required: true}
})
