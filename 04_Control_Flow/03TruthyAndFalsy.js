const userMail1 = "abcd@gmail.com"
const userMail2 = ""
const userMail3 = []

if (userMail1) {
    console.log("Got User Email");
} else {
    console.log("Don't have user email");
}

if (userMail2) {
    console.log("Got User Email");
} else {
    console.log("Don't have user email");
}

if (userMail3) {
    console.log("Got User Email");
} else {
    console.log("Don't have user email");
}

// Surprisingly we got different result for each different use without even comparing any of them beacuse JavaScript assume some values true and some false

// Falsy assumptions cases: - false, 0, -0, BigInt = 0n, ""(Empty String), null, undefined, NaN,
// Truthy assumptions cases: - Rest all which are not falsy - True, "0"(String is not empty), "false"(String is not empty), " "(Even space in string), [array], {object}, function(){}


// How to check for a empty array in condition
let emptyArr = []
if (emptyArr.length === 0) {
    console.log("Array is empty");
}
// We have to check for the length of array if that length is 0 that means our array is empty

// How to check for a empty object in condition
let emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
/*
Object.keys(emptyObj) -  First we have to convert our object in Array using Object property and using it's keys.
Then after we have an array we can check for it's length.
*/

// Nullish Coalescing Operator ?? is used when we sometime need a value not to go null as it may be problematic for our furter code. Maybe we can get the null value from server, backend, database etc.
let val1
let val2
let val3
val1 = 5 ?? 10 // If the first value is not null then it will take it as value
val2 = null ?? 10 // If the first value is null then it will take the second argument as value
val3 = undefined ?? 10 // If the first value is undefined then it will take the second argument as value
// If we had a undefined variable and we defined it later on we don't want the value to go as null, We can even give it more than 2 values but it takes only the first legal value it get

// Ternary Operator are basically shorthand of if else condition where we check a condition than give the orerator (?) then what to do if true and what to do if false seperated by : colon
// condition ? true : false

const drivingAge = 18
drivingAge >= 18 ? console.log("You can Drive") : console.log("You can't drive");