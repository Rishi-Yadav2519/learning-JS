// When we write the JavaScript all the code run if there is no error but we want to run different code at different scenerios such as a user is logged in or not logged in and many more use cases. This it what we call control flow as controling the flow of code from running unnecessary. Wecan control the flow by multiple method : - 

if (true) {
    // Execute
}
if (false) {
    // Not execute
}
// If statement is a basic example of flow control where we give a certain condition to execute the scope of if. The true false is basically some condition to check.

// If we only use if condition than we have only half control as the code outside the block run always anyway we can only control the code inside the block. SO we have complete if else condition
if (condition) {
    // execute if true
} else {
    // execute if false
}
// Complete if else statement give us full control as we first give what to do the condition is true and then we give what to do if the condition is false and it control completely as after succesful execution of true the fals eis automatically ignored. Then the code outside the if else work normally.

if (condition) {
    
} else if (condition) {
    
} else{
    
}
// We can check multiple conditions as well using if - else if - else if - else and pass the code accordingly.

// && is used to check multiple condition on a single block, It works if both return true
// || is used to check multiple condition on a single block, It works if any one return true