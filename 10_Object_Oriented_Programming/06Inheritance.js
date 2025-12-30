class user {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log("We can add something here only for teacher class");
    }
}

const xyz = new teacher("abc", "abc@gmail.com", "456")

// class also provide a easy syntax for us to inheritate other classes properties suvh as we do with call but it is much easier in there because here we just pass a super keyword and it automatically go in the other class take it's place and return as the complete pair in our current class.
// It shares a common structure but also add some different responsibilities to specific classes as we want.
// We have to give the new keyword here as well

// The extended class inherit the properties of user but the user don't get the properties of teacher.

