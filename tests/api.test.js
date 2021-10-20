const axios = require('axios'); 
API_URL="http://localhost:5000/api" 

//1.user database test array 
test('test user array', () => { 
    expect.assertions(1); 
    return axios.get(`${API_URL}/users`) 
      .then(resp => resp.data) 
      .then(resp => 
        { 
        console.log(resp[0]); 
        expect(resp[0].name).toEqual('Eren'); 
      }); 
    }); 
//2.vehicle database 
test('test vehicle array', () => { 
  expect.assertions(1); 
  return axios.get(`${API_URL}/vehicles`) 
    .then(resp => resp.data) 
    .then(resp => { 
      console.log(resp[0]); 
      expect(resp[1].type).toEqual('Luxury Vehicle'); 
    }); 
  }); 
/*
//3.spots database 
test('test spots array', () => { 
  expect.assertions(1); 
  return axios.get(`${API_URL}/spots`) 
    .then(resp => resp.data) 
    .then(resp => { 
      console.log(resp[0]); 
      expect(resp[5].id).toEqual('105'); 
    }); 
  }); 
//4.login database test 
  test('test login array', () => { 
    expect.assertions(1); 
    return axios.get(`${API_URL}/login`) 
      .then(resp => resp.data) 
      .then(resp => { 
        console.log(resp[0]); 
        expect(resp[0].name).toEqual('Mahesh'); 
      }); 
    }); 
*/