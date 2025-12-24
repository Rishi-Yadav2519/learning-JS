// We can do basic Maths operations as well as complex calculations as well.
/* 

Some important operators to know
+ addition operator
- subtraction operator
* multiplication operator
/ division operator
% modulas operator (For getting the remainder)
** exponentiation operator (Exponent & Power)

*/

// We can do the operations on numbers using these operators 
let str1 = "Hello "
let str2 = "World!"
let str3 = str1 + str2 // We can also concatenate (join) strings as well

console.log(str3)

console.log("1" + 2); // Output 12 because string + number = string and string concatenate
console.log(1 + "2"); // Output 12 because number + string = string and string concatenate
console.log("1" + 2 + 3); // Output 123 because string + number = string + number = string
console.log(1 + 2 + "3"); // Output 33 because number + number = number + string = string
// JS runs from left to right so it add the numbers first then concatenate with string.

/*
++ Increment operator increase the value by 1
-- Decrement operator decrease the value by 1
*/

// Prefix increase the value before the declaration and postfix increase the value after declaring. 
let x = 3;
const y = x++; // y is taking the value of x before the increment so returns 3

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // b takes the value of a after the increment so returns 4

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"