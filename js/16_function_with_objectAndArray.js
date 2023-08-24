
// function calculateCartPrice(num1) {

//     return num1
// }
// console.log(calculateCartPrice(200,400,500)); 

// Rest operator to solve above problem
// function calculateCartPrice(...num1) { // Rest Operator  it will return an array
//     return num1
// }
// console.log(calculateCartPrice(200,400,500)); 


function calculateCartPrice(val1, val2, ...num1) { // Rest Operator  it will return an array
    return num1  // interview question
}
console.log(calculateCartPrice(200,400,500,2000)); 


const user ={
    username: "Rohit",
    price:199
}

function handleObject(anyObject) {

        console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

// Object passing
handleObject({
    username:"Rohit",
    price:199
})

// Array
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {

    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([
    200,400,600,1000
]));
