const firstArray = [1, true, "Rishi", 4, 5] // Anything inside a square bracket considered as array in JS and they are called elements. Elements can be of any dataType.
// Array is a collection of multiple items stored in an object and defined by a single variable.
// They are resizeable and can be mix of elements
// Array elements can be accessed using index number inside a square bracket of element: - firstArray[3] and the index starts from 0.
// Array shares the same refrence point (heap memory) so modifying an array from anywhere modifies the original.

firstArray.push(23) // Adds the value in existing array at last
firstArray.push(46) // Adds the value in existing array at last

firstArray.pop() // Removes the last element of the array

firstArray.unshift(25) // Adds the element in existing array at first
firstArray.unshift(98) // Adds the element in existing array at first

firstArray.shift() // Removes the first element of the array

// We can check for any elementif it is in array or not and indexOf any element as we do with strings.
console.log(firstArray.includes(20)); // Returns true or false
console.log(firstArray.indexOf(3)); // Returns the index number

const newArray = firstArray.join() // Bind the array elements together and convert it in string

// slice & splice

let arr = [0, 1, 2, 3, 4, 5];
console.log(`Original Array is - ${arr}`)

let arr2 = arr.slice(1, 4);
console.log(arr2);
console.log(`Original Array is - ${arr}`)
// slice takes two parameters 1st is starting point and 2nd is end point, end point is not included, and make a new array from given params without changing original array.

let arr3 = arr.splice(1, 4);
console.log(arr3);
console.log(`Original Array is - ${arr}`)
// splice also takes two parameters but its end point is included in it and it takes out the elements from given starting index to given end index and create a new array modifying the original array as well.

const marvelHeros = ["Ironman", "Captain America", "Spiderman"]
const dcHeros = ["Flash", "Batman", "Superman"]

marvelHeros.push(dcHeros) // If we push any array inside another like this we get array inside array
// If we want to merge both array we should do

const mergerArray = marvelHeros.concat(dcHeros) // concate merge elements of two arrays and return a new array without modifying the original
// We can do this merging work with a mordern way using spread

const new_mergedArray = [...marvelHeros, ...dcHeros]
// ... is called spread which spread all the elements out of the array

let nestedArray = [1, 2, 3, [4, 5, 6], [3, 2, [4, 8, 0, 6]] ]
// if somehow we have a nested array and we want a simple array than we can use
let simpleArray = nestedArray.flat(Infinity)
// flat takes a value for how much depth it check to make a simple array we can give it infinity to select all nested arrays and it returns us a new single array without nesting.


console.log(Array.isArray("Rishi")); // Checks if the given variable or value is array
console.log(Array.from("Rishi")) // Converts the given value or variable in array if it is not 
console.log(Array.from({name : "Rishi"})) // If we try to convert a object in array we got an empty array unless we specify what we want in array either it should we key either value 

console.log(Array.of("Rishi", "Kumar", "Yadav")) // Converts the given value or variable in array for multiple values or variables 