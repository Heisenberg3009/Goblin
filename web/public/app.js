const API_URL = 'http://localhost:5000/api';
const MQTT_URL = 'http://localhost:5001/sendcommand';

$('#navbar').load('navbar.html');

//Displaying the User! (Display Users)
//GET function will get executed when the URL is requested!
$.get(`${API_URL}/users`)
.then(response => {
  response.forEach(user => {
    $('#users tbody').append(`
      <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.city}</td>
        <td>${user.email}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

//Adding a User! (Subscription & Registration)
//Function will get executed when Save button is clicked!
$('#add-user').on('click', function() {
  const name = $('#name').val();
  const age = $('#age').val();
  const city = $('#city').val();
  const email = $('#email').val();
  const password = $('#reenter').val();
  const body1 = {
    name,
    age,
    city,
    email,
    password
  };
//When Save is clicked, POST function gets executed (Users).
  $.post(`${API_URL}/users`, body1)
  .then(response => {
    location.href = '/userslist';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

//Displaying the Vehicle! (Display Vehicles)
//GET function will get executed when the URL is requested!
$.get(`${API_URL}/vehicles`)
.then(response => {
  response.forEach(vehicle => {
    $('#vehicles tbody').append(`
      <tr>
        <td>${vehicle.userid}</td>
        <td>${vehicle.vehiclename}</td>
        <td>${vehicle.vehicletype}</td>
        <td>${vehicle.licensenumber}</td>
        <td>${vehicle.insurance}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});
//When Save is clicked, POST function gets executed (Vehicles).
$('#add-vehicle').on('click', function() {
  const userid = $('#userid').val();
  const vehiclename = $('#vehiclename').val();
  const vehicletype = $('#vehicletype').val();
  const licensenumber = $('#licensenumber').val();
  const insurance = $('#insurance').val();
  const body2 = {
    userid,
    vehiclename,
    vehicletype,
    licensenumber,
    insurance
  };
$.post(`${API_URL}/vehicles`, body2)
.then(response => {
  location.href = '/vehicleslist';
})
.catch(error => {
  console.error(`Error: ${error}`);
  });
});

//Seperate block of code for sending manual commands!
$('#sendcommand').on('click', function() {
  const userID = $('#userID').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { userID, command })
  .then(response => {
  location.href = '/users-list.html';
   })
});