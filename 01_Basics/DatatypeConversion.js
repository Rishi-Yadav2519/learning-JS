let score = "33" // We assumed that the number we want is in String format

console.log(typeof score); // It's good practice to check data type before using it as there are some function which only run on specific data type or we got wrong output

let scoreInNumber = Number(score) // We changed the string to number. Each time we convert any data type to another format we can see that the name written starts with caps as Number, String etc.

console.log(typeof scoreInNumber);

// If there is some alphabets or other than number value and we convert it in Number format we got value NaN which means not a number.
// If there is null in value and we convert it than the value we get is 0.
// If there is undefined in value than we got NaN again.
// Bollean value true goes for value 1 and false go for value 0.


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// Converting 1 as Boolean gives us True
// Converting 0 as Boolean gives us False
// Converting empty string gives us False
// Converting string gives us True


let num = 33
let stringNum = String(num)
// Converting number in string shows us the number itself but is type changed to string