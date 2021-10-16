const mongoose = require('mongoose');

//Schema representing the document in the DB.
module.exports = mongoose.model('PHistory', new mongoose.Schema({
  id: Number,
  visitid: String,
  vehiclename: String,
  vehicletype: String,
  licensenumber: Number,
  insurance: Boolean
}, { collection : 'PHistory' }));