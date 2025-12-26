// IIFE -> Immediately Invoked Function Expressions 

function myFunc() {
    console.log("Function working");
}
myFunc()
// We created a function and invoked it right after there is no issue with this

(function myFunc() {
    console.log("Function working");
})()
// This is a simple syntax of IIFE here we wrapped our function in parenteses and then invoked it right after

(function myFunc() {
    console.log("Function working");
})()
// If w etry to run our both function now then it shows us error because the first function is executed but it didn't know where to end that function and so that the other function will not execute.
// Solution of that problem is very simple the error occured because we haven't added the semi-colon after the first sunction means we haven't ended the function.
// We can make an arrow function in IIFE as well. We can also give it arguments as we give to simple functions and so on