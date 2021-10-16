const mongoose = require('mongoose');

//Schema representing the Vehicles document in the DB.
module.exports = mongoose.model('Parking', new mongoose.Schema({
  //slotnumber of the space
  slotnumber: Number,
  //takes the id of the vehicle parked
  id: Number,
  location: {
    lat: Number, 
    lon: Number
  }
}, { collection : 'Parking2' }));