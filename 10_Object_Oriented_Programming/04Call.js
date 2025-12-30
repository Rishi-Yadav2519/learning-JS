function setUsername(username) {
    this.username = username
}

function user(username, email, password) {
    setUsername(username)
    this.email = email
    this.password = password
}

const rishi = new user("Rishi", 'rsy@gmail.com', 12325)
console.log(rishi)
// What happen if we want to pass the this context to another function or another context to get the value like here we created 2 dunction one only takes the username and assume that it check multiple things like duplictae username and certain parameters and the other function make the complete user object but the context between them is not transfered that's why username value is not transfered between them by default

// By adding the call keyword we can manually call a function where we can give it the context to use by declaring an additional argument this
function setUsername2(username) {
    this.username = username
}

function user2(username, email, password) {
    setUsername.call(this ,username)
    this.email = email
    this.password = password
}

const yadav = new user2("Yadav", 'yadav@gmail.com', 12325)
console.log(yadav)