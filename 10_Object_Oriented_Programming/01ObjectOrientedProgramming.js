const user = {
    username : "Rishi",
    loginCount : 10,
    signedIn : true,
    getUserDetails : function () {
        console.log("Got the user details.");
    }
}
// Object literal is just an object we created. It is the base unit in JavaScript. As we learnt in notes object is collection of properties and method, properties are simple key value pairs in ojects and we know we can also store functions in an object so that is method.

console.log(user.username);
console.log(user.getUserDetails());
// If we are calling a function from any object we have to run it only giving it's refrence won't do our work.

const newUser = {
    username : "Rishi",
    loginCount : 10,
    signedIn : true,
    getUserDetails : function () {
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
// Methods used in our object and array doesn't know the context of which object and array are we talking about so we have to give it a context to focus on and give us the desired output. Such as in our object we want to display the username in teh method getUserDetails but by default it doesn't take the username so we have to mention the context on which the method have to focus.
console.log(newUser.getUserDetails());
// If we get the value of this as we expected we get the object itself beacuse we are refering it using this
console.log(this);
// What happen if we run this on the global context in node enviornment we can get a {} empty object as there is nothing in global context but if we run same in browser's console.log() we can get the window object as the window object is globally available there.


// Constructor funtion
// In real world we have to make multiple object using same key in our object so it is too long process to make them 1 by 1 instead we prefer to make a structure of our object and pass the values as paramemter to a function and insert that values in our object declaring their names whatever we want.
function userDetails(username, loginCount, isLoggedIn) {
    this.username = username // We have to give this keyword to our variable to differentiate between variable and the parameter we getting. We can use a different variable if we want but it is the best practice
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this // It is not mandatory as it is defined by default but for a good practice we can define it
}
// We call the function in a variable we want to store the details giving all the parameters we can get a object created with that variable name with all key value pair structure we prepared in the function.
let user1 = new userDetails("Rishi", 5, false)
let user2 = new userDetails("Yadav", 20, true)

console.log(user1);
console.log(user2);
// Using the new keyword we have created new object with the key value pairs defined in function without even overwritting the value. As we know declaring same function 2 time overwrite the values but the new keyword helped us and give us a copy of that object stored in a variable we can use.
// new keyword first make a empty object which is called instance, then constructor function is called by the new keyword itself, then the this keyword takes all the arguments and give them the values accordingly and at last we got all the values in our object
// We can cheeck the properties of constructor which we got the construction itself in that case which is the function
console.log(user1.constructor)