class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        const number = Math.floor(Math.random() * 20 + 1 )
        return `${number}`
    }
}

const rohit = new User("rohit")
// console.log(rohit.createId()) // static not accessed

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email= email
    }
}
const iphone = new Teacher("iphone","@phone.com")

iphone.logMe()
// console.log(iphone.createId()); // static not allowed