//This is the Database API

//Database Connection Established--
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tulsi:chloe143@cluster0.lobgv.mongodb.net/Team_Goblin', {useNewUrlParser: true, useUnifiedTopology: true });
//Get collection schema--
const User = require('./models/usersmodel'); 

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
    const {id, name, age, city, slotnumber} = req.body;
    const newUser = new User({
        id,
        name,
        age,
        city,
        slotnumber
    });
    newUser.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added User and Data! Hurray!');
    });
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});