//This is the Database API

//Database Connection Established--
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tulsi:chloe143@cluster0.lobgv.mongodb.net/Team_Goblin', {useNewUrlParser: true, useUnifiedTopology: true });
//Get collection schema--
const User = require('./models/usersmodel'); 
const Vehicle = require('./models/vehiclemodel');
const Parking = require('./models/parkingmodel');
const Warehouse = require('./models/warehousemodel');
const PHistory = require('./models/phistorymodel');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = 5000;

//Test API!
app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

//API to display users!
app.get('/api/users', (req, res) => {
    User.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });

//API to save new users!
app.post('/api/users', (req, res) => {
    const {id, name, age, city, email, password} = req.body;
    const newUser = new User({
        id,
        name,
        age,
        city,
        email,
        password
    });
    newUser.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added User and Data! Hurray!');
    });
  });

//API to display vehicles!
app.get('/api/vehicles', (req, res) => {
    Vehicle.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });

//API to save new vehicles!  
app.post('/api/vehicles', (req, res) => {
    const {vehiclename, vehicletype, licensenumber, insurance, userid} = req.body;
    const newVehicle = new Vehicle({
        vehiclename,
        vehicletype,
        licensenumber,
        insurance,
        userid
    });
    newVehicle.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added Vehicle Data! Hurray!');
    });
  });

/*
//Login API!
app.get('/api/login', (req, res) => {
      User.find({}, (err, users) => {
          return err
          ?res.send(err)
          :res.send(users);
      });
    });
*/
  
//API for displaying parking slot status!
app.get('/api/parking', (req, res) => {
  Parking.find({}, (err, parking) => {
      return err
      ?res.send(err)
      :res.send(parking);
  });
});

//API for displaying warespace status!
app.get('/api/warehouse', (req, res) => {
  Warehouse.find({}, (err, warespace) => {
      return err
      ?res.send(err)
      :res.send(warespace);
  });
});

app.get('/api/phistory', (req, res) => {
  PHistory.find({}, (err, phistory) => {
      return err
      ?res.send(err)
      :res.send(phistory);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});