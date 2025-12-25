// We can denote the strings by "" (Double Quotes) or by '' (Single Quotes) in JavaScript.

const name = "Rishi" // It is a way to declare strings
const newValue = 30

console.log(name + newValue + " concatenate");
// We can add strings to multiple diffrent type of values and even add it while printing. But it is the old way of adding strings.

console.log(`${name} ${newValue} concatenate`);
// It is the new way to add different values with strings as it gives more controls on strings and the string values we pass while printing. We can make placeholders for the variables by giving ${}.

const newName = new String('Rishi') // It is also a way to declare string
console.log(newName);
// If we got value from this string we got our value as string -> object with KEY-VALUE pair which is very helpful while doing work with strings.

// For getting a Key Value Pair we can get it by declaring the key of object
console.log(newName[0]);

// For getting the prototype of our string but we get value {} blank because it only tells us the prototype not the value itself
console.log(newName.__proto__);

// For getting the length of the string
console.log(newName.length);

// For getting all the value of string in Upper Case
console.log(newName.toUpperCase());

// We can check for which character is at the given postion or key place
console.log(newName.charAt(4));

// We can check for a character and at which key index it is at.
console.log(newName.indexOf("i"));

let gameName = new String("Players Unknown Battleground's Mobile")

// We can make a substring from our string if we want but a thing to remember is the end key we pass is not included in the newString
let newString = gameName.substring(0, 7)
console.log(newString);

// The use of slice in a context where we can give the key in negative value as well that cannot be possible in subString.
let anotherString = gameName.slice(-30, -5)
console.log(anotherString);

// We can make a array from the string based on a spliter which can be " ", "-" and anyuthing else.
console.log(gameName.split(" ")); // It returns as value in array with each word as array values splits from the space. 
console.log(gameName.split(" ", 3)); // We can even select limit for how many value we want


// Trim is a method which is used to clear all the extra spaces attached to our string
let surName = "     Yadav     "
console.log(surName);
console.log(surName.trim());

// We can use replace method to replace some specific part of string into another such as: -
const url = "https://mywebsite.com/products%20page"
const newUrl = url.replace("%20", "-")

console.log(newUrl);

// We can also ask for if a specific value is inside the string or not
console.log(url.includes("mywebsite")); // True
console.log(url.includes("yourwebsite")); // False



// IMP: - We can use some string methods directly and some are built in function so we have to mention () parentheses to work it.