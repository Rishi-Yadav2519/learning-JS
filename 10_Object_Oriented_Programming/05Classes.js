// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const rishi = new User("Rishi", "abc@gmail.com", 14525)
console.log(rishi);
console.log(rishi.encryptPassword());
// Class and constructor provides us a working context where we make multiple function without making it a prototype such as we have to make a user function then add a encryptPassword prototype to it then call it. Instead of making it prototype different-different we can do it just simply using class. The method we are making outside is now inside the class and we don't have to push it as prototype