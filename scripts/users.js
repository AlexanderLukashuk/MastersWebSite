// var user = {
//     login: $("#login").val(),
//     password: $("#password").val()
// }

// // var login = $("#login").val();
// // var password = $("#password").val();

// var serializedUser =JSON.stringify(user);
// document.write(serializedUser);


// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// var request = new XMLHttpRequest();

// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// request.onload = function() {
//     var superHeroes = request.response;
//     populateHeader(superHeroes);
//     showHeroes(superHeroes);
// }

// 'use strict'; 
 
const fs = require('fs'); 

var log = $("#login").val();
var pas = $("#password").val();

alert($("#login").val());

let user = { 
    login: log,
    password: pas
}; 

let data = JSON.stringify(user, null, 2); 
fs.writeFileSync('users.json', data);