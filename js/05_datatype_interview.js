// Primitive

// 7 Types => String , Number , Boolean, null, undefined, Symbol , BigInt


const score = "100" | "10";
// console.log(score); // 110
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 

const id = Symbol("123")
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId==id);

const bigNumber = 12345654321234323n; // bigInt define


// Reference Type (Non Primitive)
// Array, Objects , Functions 

const heros = ["Rohit","doga","naagraj"]

let myObj = {
    name:"Rohit",
    age: 21,
}
// variable 
const myfunction = function() {
    console.log("Hello World");
}
console.log(typeof myfunction);
console.log(typeof(myObj));
console.log(typeof null); // Object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number 
