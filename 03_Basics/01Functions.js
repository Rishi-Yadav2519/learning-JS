function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("I");
}
// It is a basic function in JavaScript firstwe have to give the function keyword, then give our function any name like any variable, () parentheses  and at last {} curly braces which contains the function body or logic.

sayMyName // It is the refrence of function but without 
sayMyName() // () parenteses let the function execute and shows the output

function sumTwoNumber(number1, number2) {
    console.log(number1 + number2)
}
// () parenteses after the function name used for giving parameters to our function we can give values to these parameters directly while executing our function. Parameter can be 1, 2 and more.

sumTwoNumber(7, 9);
// values given during executing the function knowns as arguments for the function which gives value to parameters

// We can also store the function and even it's result in variables as we want but for storing anything we want a value to return from function because above we printed in log but didn't accessed the value itself

function multiplyNumbers(number1, number2) {
    let value = number1 * number2 // storing the sum in a variable
    return value // returning that variable
    console.log("Something"); // It is not printable as any function won't run after returning a value
}

function multiplyNumbers(number1, number2) {
    return number1 * number2 // directly returning the sum of parameters
}
// We can return a value like any of the above mentioned way and all of them are ok

// If we can't pass an value in parameter then the output should be undefined

function multiplyNumbers(number1 = 7, number2 = 9) {
    return number1 * number2 
}
// We can also assign any default value to our parameter for any instance where the function didn't get the parameter from function execution. It is used to avoid the situation of undefined.