const API_URL = 'http://localhost:5000/api';
const MQTT_URL = 'http://localhost:5001/mqtt';

//function to login into the application
function Sign_In()
{
    const username = $('#username').val();
    const password = $('#password').val();
    var login = 0;
    $.get(`${API_URL}/users`)
    .then(response => {
      response.forEach(user => {
        if (user.email == String(username) && user.password == String(password)) {
          login = 1;
          dashboard(String(username),String(user.id)/*String(user.name), String(user.age)*/);
          mqtt(String(username));
        }
      });
      if (login==1) {
        //location.href = '/dashboard';
        setTimeout(() => {location.href = '/dashboard';}, 5000)
      }
      else {
        alert('Username & Password incorrect. Try Again!');
        location.href = '/registeruser';
      }
    })
}

//function to execute the user preferences of the user logged in
function mqtt(email)
{
  alert ('Inside MQTT function!')
   $.get(`${API_URL}/users`)
    .then(response => {
      response.forEach(user => {
       if (user.email == email){
        alert ('Inside MQTT email response!')
         const song = user.song;
         const userID = user.id;
         $.post(`${MQTT_URL}/userpreferences`, { userID, song })
          .then(response => {
          //
          //location.href = '/dashboard.html';
         })
        }
      })
    })
}

//function to display the details of the user logged in
//error is in the API calls, except an API call, everything is working.
//To check: Comment out MQTT
function dashboard (email)
{ alert ('Inside Function');
    $.get(`${API_URL}/users`)
    .then(response => {
      response.forEach(user => {
      if (user.email == email){
        alert ('Inside users API!')
        //jQuery function declared to make $ DOM ready
        //$(document).ready(function(){
        jQuery(function($){
        $('#dashboardusers tbody').append(`
              <tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
              <td>${user.city}</td>
              <td>${user.phone}</td>
              <td>${user.occupation}</td>
              <td>${user.email}</td>
              <td>${user.slotnumber}</td>
              <td>${user.id}</td>
              </tr>`
          )
         })
        }
      })
   /*
   //';' used here to indicate the end of users API call
   $.get(`${API_URL}/vehicles`)
    .then(response => {
     response.forEach(vehicle => {
      if (vehicle.id == id) {
        alert ('Inside vehicle API!')
        $('#dashboardvehicles tbody').append(`
            <tr>
            <td>${vehicle.id}</td>
            <td>${vehicle.vehiclename}</td>
            <td>${vehicle.vehicletype}</td>
            <td>${vehicle.licensenumber}</td>
            </tr>`
        )
      }
    })
  })
  /*
   alert ('Hello');
   $('#dashboardusers tbody').append(`
     <tr>
     <td>${name}</td>
     <td>${age}</td>
     </tr>`
     );
     */
    /*
    $.get(`${API_URL}/users`)
    .then(response => {
      response.forEach(user => {
      if (user.email == email){
        const song = user.song;
        $.post(`${MQTT_URL}/userpreferences`, {song})
        .then(response => {
        location.href = '/dashboard.html';
         })
      }
    })
  })  
  $.get(`${API_URL}/vehicles`)
    .then(response => {
     response.forEach(vehicle => {
      if (vehicle.id == id) {
      $('#dashboardvehicles tbody').append(`
            <tr>
            <td>${vehicle.id}</td>
            <td>${vehicle.vehiclename}</td>
            <td>${vehicle.vehicletype}</td>
            <td>${vehicle.licensenumber}</td>
            </tr>`
        )
      }
    })
  })
  */
 })
 .catch(error => {
  console.error(`Error: ${error}`);
});
}

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
    <td>${user.phone}</td>
    <td>${user.occupation}</td>
    <td>${user.email}</td>
    <td>${user.id}</td>
    <td>${user.slotnumber}</td>
    </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

/*
$.get(`${API_URL}/users`)
.then(response => {
  response.forEach(user => {
$('#dashboard tbody').append(`
          <tr>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.city}</td>
          <td>${user.email}</td>
          </tr>`
      )
   })
})
*/

//Adding a User! (Subscription & Registration)

//Function will get executed when Save button is clicked!
$('#add-user').on('click', function() {
  const name = $('#name').val();
  const age = $('#age').val();
  const city = $('#city').val();
  const email = $('#email').val();
  const password = $('#password').val();
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


//Displaying vehicles!

//GET function will get executed when the URL is requested!
$.get(`${API_URL}/vehicles`)
.then(response => {
  response.forEach(vehicle => {
    $('#vehicles tbody').append(`
      <tr>
        <td>${vehicle.id}</td>
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

//Adding a Vehicle!

//Function will get executed when Save button is clicked!
//When Save is clicked, POST function gets executed (Vehicles).
$('#add-vehicle').on('click', function() {
  const userid = $('#userid').val();
  const vehiclename = $('#vehiclename').val();
  const vehicletype = $('#vehicletype').val();
  const licensenumber = $('#licensenumber').val();
  const insurance = $('#insurance').val();
  const body2 = {
    vehiclename,
    vehicletype,
    licensenumber,
    insurance,
    userid
  };
$.post(`${API_URL}/vehicles`, body2)
.then(response => {
  location.href = '/vehicleslist';
})
.catch(error => {
  console.error(`Error: ${error}`);
  });
});

//Displaying Parking

$.get(`${API_URL}/parking`)
.then(response => {
  response.forEach(parking => {
    $('#parking tbody').append(`
      <tr>
        <td>${parking.id}</td>
        <td>${parking.slotnumber}</td>
        <td>${parking.location.lat}</td>
        <td>${parking.location.lon}</td>
      </tr>`
    );
  });
})

//Displaying Warehouse Status

$.get(`${API_URL}/warehouse`)
.then(response => {
  response.forEach(warespace => {
    $('#warespace tbody').append(`
      <tr>
        <td>${warespace.warespaceid}</td>
        <td>${warespace.stockingid}</td>
        <td>${warespace.location.lat}</td>
        <td>${warespace.location.lon}</td>
      </tr>`
    );
  });
})

//Parking History
//GET function will get executed when the URL is requested!
$.get(`${API_URL}/phistory`)
.then(response => {
  response.forEach(phistory => {
    //Parking History needs to show only for one user who is logged in
    //Parking history should show all the objects in the array
    //for (let a=0/*, b=0, c=0, d=0, e=0*/; a<[phistory.visitid].length/*,b<phistory.visitid.length,c<phistory.visitid.length,d<phistory.visitid.length,e<phistory.visitid.length*/;a++/*,b++,c++,d++,e++*/)
    //var key, obj, prop, owns = Object.prototype.hasOwnProperty; - Variable method
    {
    $('#phistory tbody').append(`
      <tr>
        <td>${phistory.visitid/*.a*/}</td>
        <td>${phistory.vehiclename}</td>
        <td>${phistory.vehicletype}</td>
        <td>${phistory.licensenumber}</td>
        <td>${phistory.insurance}</td>
      </tr>`
     );
    }
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});


//Seperate block of code for sending manual commands!
$('#sendcommand').on('click', function() {
  const userID = $('#userID').val();
  const command = $('#command').val();
  $.post(`${MQTT_URL}/sendcommand`, { userID, command })
  .then(response => {
  location.href = '/users-list.html';
   })
});