const score = 200;
// We can declare number in JavaScript directly without any quotation marks it automatically a number

const anotherScore = new Number(200);
// We can also declare a number by new keyword as we did in string same we got the value in object
console.log(typeof anotherScore);

console.log(score.toString()) // We can convert our number to string and run all the string properties in it.

console.log(score.toFixed(2)) // toFixed is used to show the numbers in decimal such as e-commerce sites. It takes a value inside it which means how many number we want to show after the decimal

const hundreds = 1428329634698
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString("en-IN"))
// We can convert our number to standard with , (comma) but by default they are in US standard we can convert them in Indian standards as well

console.log(Math); // Math itself contain multiple values in JavaScript and if we check it is also a object

console.log(Math.abs(-4)) // Sometime we want to check any numbers absolute value means we want to change a negative number to positive so Math.abs() do that work.

console.log(Math.round(26.78)) // Converts a decimal number to nearest round off

console.log(Math.ceil(26.78)) // Converts a decimal number to nearest upper round off

console.log(Math.floor(26.78)) // Converts a decimal number to nearest lower round off

console.log(Math.random()) // Generate a random value from 0 to 1 mean such as 0.875386, 0.87356, 0.126 etc.

// Their is a generic formula for generating the random number as we never want to generate a infinite number so their should be a max-limit and the minimum limit is 0 itself if we didn't give any to it
const minNumber = 10
const maxNumber = 20

console.log(Math.random() * (maxNumber - minNumber + 1)) // max - min helps us generate a random number between the gap of both numbers such as their is a gap of 10.
console.log(Math.floor(Math.random() * (maxNumber - minNumber + 1))) // Math.floor we have seen above
console.log(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber) // Adding min after flooring insure the minimum value

// It is a basic standard for generating a random number within developers