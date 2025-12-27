// All loops are same and do the same work just the difference is syntax and complexity of usage, Some loops are simple for a task but complex for another, just that's the usage of different loop


/*
while (condition) {
    
}
*/


// It is a basic syntax of while loop in while loop there is only a condition checking and scope. But for checking the condition we have to give it values as in if else or the second part of for loop. And after getting the condition we also want to terminate our loop at a certain point, so we give the last step of our for loop as well and if we give all these details it's basically turned into different kind of for loop

let index = 0;
while (index <= 10){
    console.log(index)
    index++
}
// If we look closely we get a variable declared as first part in for loop, a condition as second par in for loop, a scope as thirs part in for loop and also a simple code to increase the variable or decrease for meeting the condition value to stop the loop.
// This all thigs are also present in for loop but there is just syntax change and nothing else


let myArr = ["Rishi", "Kumar", "Yadav"]
let i = 0
while (i < myArr.length) {
    let element = myArr[i]
    console.log(element);
    i++
}
// We can also apply that on array without any worries. Same we can make nested loops and so many thing as we do in for loop.


// Do-while loop is also a kind of for loop or while loop but there is just a simple change.
let score = 0
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// As we see it's also taking all the thing for loop or the while loop taking but just the diffrence is it runs the loop first and check the condition later. Like it runs the once even if the condition is false.