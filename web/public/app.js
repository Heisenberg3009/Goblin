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
  const body = {
    name,
    age,
    city
  };
//When Save is clicked, POST function gets executed.
  $.post(`${API_URL}/users`, body)
  .then(response => {
    location.href = '/userslist';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

$('#sendcommand').on('click', function() {
  const userID = $('#userID').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { userID, command })
  .then(response => {
  location.href = '/users-list.html';
   })
});