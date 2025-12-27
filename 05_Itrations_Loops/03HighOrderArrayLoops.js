// Some loops are designed specific usage for array and objects. They are also same as the other loop swe have learnt about but for making things simple some keywords are predefined in them.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const arr of myArr) {
    console.log(arr);
}

// It is a basic for of loop where it prints the elements from an array. Here we can see it is taking the variable first by const and of is the keyword used for declaring where we want to put the loop (array, object, string), As it is desgined for limited usage it takes the conmdition and the variable increment by default. But at last it is also doing the same work as other loops.

let myStr = "Hello World!"
for (const string of myStr) {
    console.log(string);
}
// Example of putting the loop on a string

// Objects are not iterateable using simple loops as array and strings, there are other ways to do so, but there is also a new type of object map.

const myMap = new Map
myMap.set("IN", "India")
myMap.set("NE", "Nepal")
myMap.set("PK", "Pakistan")
myMap.set("BG", "Bangladesh")
myMap.set("NE", "Nepal")

console.log(myMap);
// map also create a object but the diffrence is that map is iterable and contains only unique values means there are no duplicate values.

for (const key of myMap) {
    console.log(key);
}
// If we simply run for of loop on map it gives us the key value pair of each element in array.

for (const [key, value] of myMap) {
    console.log(`Key in map is ${key} and value of key is ${value}`);
}
// We can use [] square bracket outside the key, value to destructure the array inline.

// IMP: - For of loop gives us the value itself of any array, string or map, not the key.

const myObj = {
    name : "Rishi",
    age : 24,
    email : "rsy81179105@gmail.com",
    mobNumber : 9878261387
}
for (const key in myObj) {
    console.log(key);
} // The for in loop works for keys inside object, array. So if we get the key we can call the value from it as well.

for (const key in myObj) {
    console.log(myObj[key]);
}
// It is the way to get the value of key from any object as we know the loop runs on each element so it prints all the object by key number right after. If we want we can use both the key and the value as well

// Higher Order Function
// forEach is known as higher order function which act as loop for each available element of array

let newArr = ["Ram", "Shyam", "Ghanshyam", "Kumar", "Ravi", "Kavi"]

newArr.forEach( (val) => {
    console.log(val);
})
// We can give the arrow function in parentheses of forEach itself

newArr.forEach( function (elem) {
    console.log(elem);
})
// We can give the full function as well

newArr.forEach(funcForEach)
// And if we want we can give the refrence of a function written outside as well
function funcForEach(abc) {
    console.log(abc);
}

// By default the forEach takes the value of the array at first, but it also takes out the index as well as complete array each time. If we want to get the index and array as well then we have to give more parameters and it will so the work automatically.
// We can give any names to parameter but it is recommended to give name according to need as it helps in understanding the code

// What if we got stuck in a problem where we call some data from data base and it come in an array but the array contains diffrent objects itself such as: - [{}, {}, {}]

const objInArr = [
    {
        name : "Rishi",
        role : "Developer"
    },
    {
        name : "Renuka",
        role : "Housewife"
    },
    {
        name : "Poonam",
        role : "XYZ"
    }
]

objInArr.forEach( (obj) => {
    console.log(obj.name);
} )
// we can simply access the each object one by one using the loop in array by forEach then call the value by it's key and our work is done.

// forEach take callback as argument and callback is basically a function which we can use in single line as well as in multiple lines but if we open the scope {} of function we have to add return keyword for returning values and if we don't open the scope {} and do our work in single line than return keyword is not needed.