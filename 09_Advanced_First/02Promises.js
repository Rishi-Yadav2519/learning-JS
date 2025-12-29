// Promise is also a type of function it takes a callback function with resolve and reject as parameter because either the promise complete or the promise left uncomplete
const promise1 = new Promise(function (resolve, reject) {
  // Do an async call: - Database calls, cryptography related, network related, etc.
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // We have to give it resolve or reject on which basis the next .then or .catch is going to execute
  }, 1000);
});
// We have created a simple async function of setTimeout. In promise we can see that either that timeout run or the it failed to run that returns us resolve or reject

promise1.then(function () {
  console.log("Promise consumed");
});
// .then() is directly connected with the promise itself. It takes another callback function which tells what to do after the promise is fullfilled. If the promise is resolved the .then() function runs.

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});
// We can also do that work without declaring the variable and storing the promise in variable. We can also make it arrow function.

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Rishi", email: "rsy81179105@gmail.com" });
    // Resolving with some parameter to return
  }, 1000);
});
promise3.then((user) => {
  // Giving the returned value a name
  console.log(user.username); // Access the returned value from the promise in .then()
  console.log(user.email);
});
// We can pass parameters in resolve which we can use in .then() and other function depending on it.

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Rishi", email: "rsy81179105@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promise4
  .then(() => {
    console.log("Promise 4 resolved");
  })
  .catch(() => {
    console.log("Promise 4 rejected");
  });
// We can give callback to .catch() also as similar to .then() and we can define reject as we have described resolve

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Rishi", email: "rsy81179105@gmail.com" });
    } else {
      reject("ERROR: Something happened");
    }
  }, 1000);
});
promise5
  .then((user) => {
    console.log("Promise 5 resolved");
    console.log(user);
    return user.username;
  })
  .then((userName) => {
    console.log("Promise 5 .then() done");
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });
// The parameter inside the .catch() is the error we returned in reject as parameter
// Here we first take the .then()'s resolved object and then returned its username and accessed that username using another .then() which is going to work on the returned promise by .then().
// Multiple .then() is called promise chaining which helps us to take out values from object, function, array etc. whichever we returned through promise resolve.
// .finally() is the method which is going to run either the promise is resolved or rejected.

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "New User", email: "new@gmail.com" });
      // console.log("Promise 6");
    } else {
      reject("ERROR: Promise 6 error");
    }
  }, 1000);
});

// We can also handle the promise using async await as async await also give us asynchrounus programming where we wait for the response of our promise in background while doing other stuff
async function asyncFunctionForPromise() {
  const response = await promise6; // We cannot initialise the function with () parentheses as the promise itself is object not a function
  console.log(response);
}
asyncFunctionForPromise();
// async function offer us another way to handle promises response we can wait for it's response in async function using await keyword.

const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "New User", email: "new@gmail.com" });
    } else {
      reject("ERROR: Promise 7 error");
    }
  }, 1000);
});
async function asyncFunctionForPromise2() {
  try {
    const response = await promise7;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
asyncFunctionForPromise2();
// We can handle promise errors in async await using try and catch method we can try to run a block of code if that failed to run then we catch the error and return the value. In our case we are trying to run our promise in async function by try() method and as it is rejecting with some value it is going to execute in catch() method. If everything goes well than the promise executed with values gives.

async function getAllUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();
// Example of the actual work of fetching API and giving response according to the API status using async await function here we have to note that we added 2 await keyword. We have to await for all the task which is going to take time like here fetching take sometime and even converting them is also taking sometime


const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {console.log(err)})
// Fetch returns us promise by default so we can add directly .then() & .catch() method on fetch and do the same work using promises & it's methods