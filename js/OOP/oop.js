// OOP -> programming paradigam it means structure of program

// Object -> collection of propertise and methods

// OOP -> constructor function, Prototype , classes , Inatance(new, this)

// 4 -> Abstraction , Emcapsulation, Inheritance, Polymorphisam

// Object Litral
const user = {
    username:"Rohit",
    login: 8,
    signIn:true,

    getUserDetails: function(){
        // console.log("Got user details from DB");

        console.log(`username: ${this.username}`);
        console.log(this); // surrunt context
    }
}
// console.log(user[1]);
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);// currunt object window if you need to check on browser



// Constructor function
// const promiseOne= new Promise()  // constructor function
// const date = new Date()  // constructor function

// function User(username,loginCount, isLoggedIn) {
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn= isLoggedIn
//     return this
// }
// const userOne = User('ROhit', 12, true)
// const userTwo = User('Tawade',12,false)
// console.log(userOne); // value override
// console.log(userTwo); // value override 


function User(username,loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn= isLoggedIn
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userOne = new User('ROhit', 12, true) //new memory allocate it means hare created new object
const userTwo = new  User('Tawade',12,false) // new memory allocate it means hare created new object
console.log(userOne); // value override
console.log(userTwo); // value override 
console.log(userTwo.greeting()); 


console.log(userTwo.constructor); // value override 
console.log(userTwo.constructor); // value override 

