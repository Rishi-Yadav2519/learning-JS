const user = {
    userName : "Rishi",
    planPrice : 699,
    welcomeMessage : function () {
        console.log(`${this.userName}, Welcome to my Website.`);
    }
}
user.welcomeMessage();

// this used for refering any value or variable in current context. If we change the value of any variable then the cotext also change and updates the value.
user.userName = "Yadav"
user.welcomeMessage();

// As we know this refer to any current context of anything we target. So if we check the context of this in node enviornment we got a blank object abut if we check it in browser console we got window object
console.log(this);

function newFunc() {
    userName = "Rishi"
    console.log(this);
    console.log(this.userName);
} 
newFunc()
// We can get many information about a function using this but we can't access values inside function by declaring this as it works in object.

const arrFunc = ()=> {

}
// It is the syntax to declare arrow function in JS we can use it as our normal function and pass parameters as well inside the parenteses ().

const arrFunc2 = (num1, num2) => {
    return num1 + num2
}
console.log(arrFunc2(4, 3));

const arrFunc3 = (num1, num2) => num1 + num2
console.log(arrFunc3(4, 3));

const arrFunc4 = (num1, num2) => (num1 + num2)
console.log(arrFunc4(4, 3));
// We can also declare single line arrow function witout the curly braces {} where the return keyword is not mandatory. But remember that if we want to add curly braces {} than the return keyword is mandatory.
// This way of returning a value is useful when returning an object because ocjects are inclosed in {} curly braces and we can't return a value of {} without return keyword so we have to wrap it in parentheses