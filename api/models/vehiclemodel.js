const mongoose = require('mongoose');

//Schema representing the Vehicles document in the DB.
module.exports = mongoose.model('Vehicles', new mongoose.Schema({
  vehiclename: String,
  vehicletype: String,
  licensenumber: Number,
  insurance: Boolean,
  userid: Number
}, { collection : 'Vehicles' }));