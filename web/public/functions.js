module.exports = function Sign_In() {​​​​​​​​
    var login = 0;
    console.log('Inside function succesfully!');
    const username = $('#username').val();
    const password = $('#password').val();
    $.get(`${​​​​​​​​API_URL}/login​​​​​​​​`)
    .then(response => {​​​​​​​​
        response.forEach(user => {​​​​​​​​
        if (user.email == username && user.password == password) {​​​​​​​​
        console.log('matched')
        login = 1;
        }      ​​​​​​​​
      }​​​​​​​​);
      if (login == 1) {​​​​​​​​
      location.href = '/dashboard';
    }​​​​​​​​
      else {​​​​​​​​
      alert('User not found: Try Again or Sign Up <-');
      location.href = '/registeruser';
          }​​​​​​​​
    }​​​​​​​​)
  }

 