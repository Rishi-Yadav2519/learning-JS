var a = 10
let b = 20
const c = 30
// These all are global declared variables as they are no inside any scope so they will work globally inside our file

// The space inside the curly braces is called scope.
function newFunc() {
    // This is scope
}

if (true) {
    var d = 10
    let e = 20
    const f = 30
}
// Above are examples of variables declaration in block scope they can be accessed only inside the block.

console.log(d); // It is the problem that we declared d indside the block scope but it can be accessed outside the block as well.
console.log(e); // Shows error as e is not defined
console.log(f); // Shows error as f is not defined

// We can access a global declared variable inside a scope but any variable declared inside scope can't be accessed outside that scope.


// Nested scope example
function one() {
    const userName = "Rishi"

    function two() {
        const website = "google.com"
        console.log(userName);
    }
    
    console.log(website);
    
    two()
}

one();
// Here we can see that we created a functioon and another function inside that function so there are two scopes one for the parent function and the other for child function. The child function takes values from the parent but the parent can't take value from child.
// It is useful in any usecase where scopes are used.


function addOne(num) {
    return num + 1
}
console.log(addOne(5));

const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5));
// It is a example of making function we can store our function in a variable as well.



console.log(addOne(5));
function addThree(num) {
    return num + 3
}

console.log(addTwo(5));
const addFour = function (num) {
    return num + 4
}
// If we try to execute a simple function before the function itself it should be fine but if we try to call our function declared in a variable before the declaration than it shows us error because we can't access a variable before its declaration.