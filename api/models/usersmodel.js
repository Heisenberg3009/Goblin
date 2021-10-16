const mongoose = require('mongoose');

//Schema representing the document in the DB.
module.exports = mongoose.model('Users', new mongoose.Schema({
  id: Number,
  name: String,
  age: String,
  city: String,
  phone: String,
  occupation: String,
  song: String,
  email:String,
  password: String,
  visitid: String,
  slotnumber: Number
}, { collection : 'Users2' }));