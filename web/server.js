const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.sendFile(`${base}/login.html`);
  });

  app.get('/login', (req, res) => {
    res.sendFile(`${base}/login.html`);
  });

  app.get('/dashboard', (req, res) => {
    res.sendFile(`${base}/dashboard.html`);
  });

  app.get('/registeruser', (req, res) => {
    res.sendFile(`${base}/register-user.html`);
  });

  app.get('/registervehicle', (req, res) => {
    res.sendFile(`${base}/register-vehicle.html`);
  });

  app.get('/userslist', (req, res) => {
    res.sendFile(`${base}/users-list.html`);
  });

  app.get('/vehicleslist', (req, res) => {
    res.sendFile(`${base}/vehicles-list.html`);
  });

  app.get('/lighting', (req, res) => {
    res.sendFile(`${base}/lighting.html`);
  });

  app.get('/userpreferences', (req, res) => {
    res.sendFile(`${base}/user-preferences.html`);
  });

  app.get('/sendcommand', (req, res) => {
    res.sendFile(`${base}/send-command.html`);
  });
  
  app.get('/*', (req, res) => {
    res.sendFile(`${base}/404.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });