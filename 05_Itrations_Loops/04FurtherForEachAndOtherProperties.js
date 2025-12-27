const myArr = ["JavaScript", "HTML", "CSS", "React", "NodeJS"]

myArr.forEach( (item) => {
    console.log(item);
} )
// We can know about forEach on array but as we see here we are printing the values in console log.

const newArray = myArr.forEach( (item) => {
    return item
} )
console.log(newArray);
// If we try to store the item value in aa variable it is not possible directly.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = num.filter( (item) => item > 5)
console.log(newNums);
// filter is the property to return value based on condition but the returned value is also an array stored in a variable. Filter also takes callback (arrow function) with condition. We can return the value in single line function without {} curly braces. As we know earlier if we use curly braces we have to use the return keyword to return the value.

const anotheNewNums = num.filter( (item) => {
    return item < 5
})
console.log(anotheNewNums);

// If we try to do the same work using forEach we have to first make an empty array and then pass for each on each item then check for a condition and push in the true values in empty array.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNumArr = []

numArr.forEach( (item) => {
    if (item > 5) {
        newNumArr.push(item)
    }
} )
console.log(newNumArr);
// Here we do the same work which filter do in one line

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// It is a short kind of real example where we got books data from database now we have given a filter option to user and we have to show him books according to the filter.

// User want book based on history genre
let bookAfterFilter = books.filter( (item) => item.genre == "History" )
console.log(bookAfterFilter);

// User want book published after 1995
bookAfterFilter = books.filter( (item) => item.publish >= 1995 )
console.log(bookAfterFilter);
// We overwritted the value of bookAfterFilter itself.

// User want book under Non-Fiction genre and publish before 1990
bookAfterFilter = books.filter( (item) => item.genre === "Non-Fiction" && item.publish < 1990 )
console.log(bookAfterFilter);
// we can apply multiple filter at same time as well

let someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const someNewNums = someNums.map( (item) => item + 5 )
console.log(someNewNums);
// map is similar to forEach in every aspect it is just usablly as a value of variable but we can't directly use forEach as value of variable. Here also we can use {} scope or not if we want and give the code of what to do with the itmes of array like here we added 5 to each item. We can do the same work using forEach as well

let anotherNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const anotherNewNums = anotherNums
                            .map( (items) => items * 10 )
                            .filter( (items) => items >= 50 )
                            .map( (items) => items + 5 )

console.log(anotherNewNums);
//Above is the example of method chaining which means we can add multiple methods at once in single array by method chaining

const redNums = [1, 2, 3, 4, 5, 6]

const newRedNums = redNums.reduce( (functionReturn, arrayValue) => {
    return functionReturn + arrayValue
}, 0)
// It is a basic reduce method, it is used to apply some code/logic on ecah element in array and reduce the return to a single value.
// We have an array with some numbers and we want a sum of all the number so we used reduce method. Reduce method can be returned in variable if we want. Reduce method also take a callback function wheter it can be one line without scope or multi line with scope return.
// It takes 2 parameters not just 1 like other methods we discussed. The first parameter is initial value or where should it start to work, in our example we want to sum all numbers so we give intial value to 0, the initial value is given at last seperated by a comma (,). Initial values is taken only once.
// Second parmeter is the value from each element in array. After taking both parameters it impliments te code then return a value which should be treated as initial value next time the loop run on another value of array element.

// A small real world example to use reduce method
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const billAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(billAmount);