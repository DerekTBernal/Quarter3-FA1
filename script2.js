var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var birthYear = prompt("What year were you born?");

var age = 2025 - birthYear;

document.getElementById("output").innerHTML = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;