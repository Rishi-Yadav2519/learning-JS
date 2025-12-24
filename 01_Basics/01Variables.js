// Constants declared by const keyword cannot be updated later
const customerId = 3572;
let customerName = "Rishi";
var customerCity = "New Delhi";
customerEmail = "rishi@gmail.com";
let coustomerState; // We can also declare a variable without any value so it contain undefiend value by default and we change it's value later on.

// customerId = 872; // It is not allowed in JS as the constant declared cannot changed

customerName = "New User" // We can update that as customerName is declared by let
customerCity = "Ayodhya" // We can update that as well customerCity is also declared by let
customerEmail = "trial@gmail.com" 

console.log(customerId); // It is for logging the data

console.table([customerId, customerName, customerCity, customerEmail, coustomerState]) // Logging the data in tabular format
// Var has issues with block scope and functional scope so we cannot use them at current times instead we go with the let keyword
