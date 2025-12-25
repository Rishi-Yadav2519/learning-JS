const firstObject = {
    name : "Rishi",
    age : 24,
    email : "mymail@gmail.com",
    isLoggedIn : false,
    "location" : "New Delhi"
}
// This is an example of object in JavaScript it comes with a key value pair as in arrays the index number are the key but we can't change them in array, but inobject we can declare both the key and the value itself. Value should be any type no problem at all.
// The key of object is in string by default but we can sometime encounter the key declared in "" quotation marks which also make the key string. That should be fine but changes the way of calling the value of object.

console.log(firstObject.name); // we can simply call a value of object like this
console.log(firstObject["name"]); // This is also a way of calling a value of an object. Noticed the "" quotation marks it's important if we are calling a value like this
// console.log(firstObject[name]); // This is wrong it doesn't give us any value

// We don't have any option to call the location value of above object by the firstObject.location method. That's the point where the other method of square brackets work.
console.log(firstObject["location"]);

firstObject.name = "Yadav" // we can overwrite the value like this of an object

Object.freeze(firstObject); // Freezing of object values so that they can't be changed.

firstObject.name = "Renuka" // We can overwrite it cause it's values are freeze

const secondObject = {
    name : "Rishi",
    age : 24,
    email : "mymail@gmail.com",
    isLoggedIn : false,
    "location" : "New Delhi"
}

// we can also give function in object value
secondObject.greeting = function () {
    console.log("Hello User");
}

console.log(secondObject.greeting); // It gives us an anonymous function as value because we didn't initialized the function
console.log(secondObject.greeting()); // It runs the function and gives the value inside function


secondObject.greeting = function () {
    console.log(`Hello User ${this.name}`); // We can define any value of the same object inside another key value pair using this.key as we did here.
}
console.log(secondObject.greeting());