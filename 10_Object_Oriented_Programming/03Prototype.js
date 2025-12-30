let myName = "Rishi"
console.log(myName.length);
// This returns the length of the string as obvious

let myName2 = "Rishi     "
console.log(myName2.length);
// If we add space then the space also included in the length but we want only the true length of the string using a trueLength prototype but this kind of prototype doesn't exist but we can make our own method and push it in either our specific type or a global type such as for all objects, all arrays etc. If we make a prototype for default object it is available in all the types beacuse we know everything in JavaScript is object.

const myArr = [1, 2, 3, 4]

const myObj = {
    name : "XYZ",
    age : 23
}

const myStr = "Welcome"

// Declared a global Object and access it's prototype then give the prototype a name for our self defined method and what that method do.
Object.prototype.rishi = function () {
    console.log("Rishi is everywhere");
}

myArr.rishi();
myObj.rishi();
myStr.rishi();
// We called the method in different places ans got it everywhere without even declaring for each. This is the prototype inharitance where the elements use it's parent's or grandparent's prtotype by inhetiting it.


/*
const user = {
    name : "Rishi",
    email : "xyza@gmail.com"
}
const teacher = {
    name : "PQR"
}
const teachingSupport = {
    isAvail : true
}
const backEnd = {
    prepared : false,
    __proto__ : teachingSupport
}
user.__proto__ = teacher
// We can also make the inharitance using the __proto__ method which links two different prototype to share


// Modern Syntax
Object.setPrototypeOf(teachingSupport, backEnd)
*/



String.prototype.trueLength = function () {
    console.log(this);
    console.log(`True Length is ${this.trim().length}`);
}
console.log(myName2.length);