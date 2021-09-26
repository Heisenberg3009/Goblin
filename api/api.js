//This is the Database API

//Database Connection Established--
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tulsi:chloe143@cluster0.lobgv.mongodb.net/Team_Goblin', {useNewUrlParser: true, useUnifiedTopology: true });
//Get collection schema--
const User = require('./models/usersmodel'); 
const Vehicle = require('./models/vehiclemodel');

const express = require('express');
const app = express();

const bodyParser = requirqe('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = 5000;

app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

app.get('/api/users', (req, res) => {
    User.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });

app.post('/api/users', (req, res) => {
    const {id, name, age, city, email, password, slotnumber} = req.body;
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


app.get('/api/vehicles', (req, res) => {
    Vehicle.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });
  
  app.post('/api/vehicles', (req, res) => {
    const { userid, vehiclename, vehicletype, licensenumber, insurance} = req.body;
    const newVehicle = new Vehicle({
        userid,
        vehiclename,
        vehicletype,
        licensenumber,
        insurance
    });
    newVehicle.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added Vehicle Data! Hurray!');
    });
  });

  
  app.get('/api/login', (req, res) => {
      User.find({}, (err, users) => {
          return err
          ?res.send(err)
          :res.send(users);
      });
    });
  
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});