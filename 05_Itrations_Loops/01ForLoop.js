// Basic For Loop
/* 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
// As the basic for loop has a block level scope we can't access values declared inside the loop to outside. After breaking down the for loop we got: - 

First it declare a variable called index with value 0 or whatever we want.
Second the comparison of the index variable with anything we want beacuse we don't want our loop to run infinite time, Here we are comparing the index's value with array.length. If we want we can give any other comparision to check
Third the block execute itself remaining index++ untouched, we can write the code to execute inside the the block
At last the index++ execute increasing the value of index we can also give anything else such as index-- or any other thing to do with the index

The loop runs while the condition is true and stopped once it turns false.
*/

// We can do anything inside the block of the loop sunch as running a function, printing array value, printing objects key, condition ckecking, nested loop etc. 


/*
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(index);
}
*/


// It is a basic example of printing values 0 to 10 using for loop.


/*
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (index == 5) {
        console.log("Now the value is 5");
    }
    console.log(index);
}
*/


/*
for (let index = 1; index <= 10; index++) {
    console.log(`Table of ${index}`);

    for (let num = 1; num <= 10; num++) {
        console.log(`${index} X ${num} = ${index * num}`);
    }
}
*/


// We can do anything inside the loop block as we do normally and even control the loop itself like here we are printing multiplication

// We can mostly do our work with array in loops so how can we print a value from an array using for loop. It is decribed in the loop basic structure as well.

let myArr = ["Rishi", "Kumar", "Yadav"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// Sometimes we have to stop our loop on a certain point and again start it from there to any other certain point, such as we have a array of 1000 username we have to print only 50 in the first page then next 50 on second page and so on like that.
// Break and Continue - In this example we are going to break a loop on 5
for (let index = 1; index <= 20; index++) {
    console.log(index);
    if (index == 5) {
        console.log("Here is 5");
        break;
    }
}
// We can break a loop using the break keyword same as switch case. It stops the loop after meeting the condition in if statement

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Here is 5");
        continue;
    }
    console.log(index);
}
// Continue is also a type of break but it ignore the condition once and let the loop running except for that specific condition meeting point in our case 5 is not printing normally as other number bacause it stops the loop there and didn't execute the block but then ignore the break and continued the loop as remaining. 