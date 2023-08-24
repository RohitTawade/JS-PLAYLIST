// this and arrow function(ES6)

const user = {
    username:"Rohit",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this refer to current context

        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this); // Empty {} in node but brower not

// Arrow function -> Not in this keyword

function chai() {
    let username = " Rohit"
    console.log(this.username); // undefined
}
// chai()

// Arrow Function
const chai1 = () => {
    let username = " Rohit"
    console.log(this); // {}
}
// chai1()

// Explicit Return

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }




// Implicit return

// const addTwo = (num1 , num2) =>  num1 + num2 
 const addTwo = (num1 , num2) =>  (num1 + num2 )

// console.log(addTwo(12,12));

const name = (num1 , num2) =>  ({username:"Rohit"})

console.log(name());
 

