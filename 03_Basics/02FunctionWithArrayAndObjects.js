// We can suppose that we are making a shoping website where we don't know hoe much value is user to give in cart
function totalValue(num) {
    return num
}
console.log(totalValue(200, 250, 300))
// Only the first value is taken as parameter

function totalCartValue(...num) { // We can use rest operator in that case same as spread operator in array. They both defined by same ... just the use is different at different places.
    return num
}
console.log(totalCartValue(200, 250, 300))
// All the values returned as an array by just one parameter

function secondTotalValue(val1, val2, ...num) {
    return num
}
console.log(secondTotalValue(200, 300, 400, 500, 600, 700));
// Here the num contain only 400, 500, 600, and 700 because 200 and 300 are assigned to val1 and val2 cause they are also parameters earlier than ...num


const user = {
    userName : "Rishi",
    planPrice : 395
}
function functionWithObject(anyObj) {
    console.log(`The username is ${anyObj.userName} and the plan price is ${anyObj.planPrice}`);
}

functionWithObject(user)
// We can give values of the object to function by using key value pair declaration or any method we learn but point to remember is that always check the data type and the key is present or not in object to avoid undefiened instances.

let functionArray = [92, 98, 21, 421]
function getSecondValue(anyArray) {
    return anyArray[1]
}
console.log(getSecondValue(functionArray));
// We can do the same with arrays as well  