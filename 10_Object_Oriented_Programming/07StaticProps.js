class user{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return`123`
    }
}
const rishi = new user("Rishi")
console.log(rishi.createId())
// Sometimes we don't want to give access to an specific method to to our newly created object or user so we can use static to stop the usage