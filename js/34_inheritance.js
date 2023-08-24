class User {
    constructor(username) {
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        super(username)  // super class constructor call
        this.email=email
        this.password=password
        
    }

    addCourse() {
        console.log(`A new course added by ${this.username}`);
    }
}

const rohit = new Teacher("rohit","rohit@gmail.com","123")

rohit.addCourse()
rohit.logMe()

const rohit1 = new User("rohit")
rohit1.logMe()


console.log(rohit instanceof Teacher); // true
console.log(rohit instanceof User); // true


