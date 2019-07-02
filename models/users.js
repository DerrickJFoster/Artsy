const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

//user model
const userSchema = new Schema({
  username:{type: String, required: true, unique: true},
  password:{type: String, required: true}
})

//salting
const saltRounds = 10

//has pw before added to DB
userSchema.pre('save', function(next){
  //check if new doc or pw has been set
  if (this.isNew || this.isModified('password')) {
    //save reference because of scope changes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
    function(err, hashedPassword) {
      if (err) {
        next(err)
      } else {
        document.password = hashedPassword;
        next()
      }
    });
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema)

module.exports = User
