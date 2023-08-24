// Stact and Heap

// *************** Memory ****************

// Stact -> Primitive type(When User create variable then stact give you copy)

// Ex
let myName = "Rohit Tawade"; // it goes to the stact
let anotherName = myName; 
anotherName='Tawade Rohit'
console.log(anotherName);
console.log(myName);
// check here original value will not change stact give us copy 
// check base variable original value not changing

//  Heap -> (Non-Primitive)() (Original value change it will give us referance)
// Ex. 

let userOne = {
    email:"rohittavade55@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "rohittavade54@gamil.com" // checking userOne changing or not it means original value change or not.

console.log(userOne);
console.log(userTwo); // Both are changing original that's why here it create memory in Heap

