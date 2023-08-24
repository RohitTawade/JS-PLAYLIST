// Functions: Block of code 
// 1. Reusability


function sayMyName() {
    console.log("Rohit"); 
}
// sayMyName -> referance
// sayMyName() // calling

// add two numbers

// Function with parameter
function addtwoNumber(number1, number2) {
    // console.log(number1 + number2);

    // let result = number1+number2
    // return result 

    return number1 + number2
    // console.log("Hello"); // here it will not wrok when we return 
}

// addtwoNumber() // NaN > NOt a Number
// addtwoNumber(12,12) // arguments
const result = addtwoNumber(3,5);
console.log("Result: ",result); // undefined when we not return anything in function now it will work but if you not return function inside 


// Problems in functions
addtwoNumber(3, "4") // 34
addtwoNumber(3,"a") // 3a 
addtwoNumber(3, null) // 3

// function loginUserMessage(username = "sam") { // default value we can provide
function loginUserMessage(username) { // default value we can provide
    // if(username === undefined){
        if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

const message = loginUserMessage("Rohit")
// console.log(message);
// console.log(loginUserMessage("ROhit"));
// console.log(loginUserMessage("")); // nothing 
console.log(loginUserMessage()); // undefined
