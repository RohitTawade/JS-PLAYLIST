// const userEmail = "rohittavde55@gmail.com"
// const userEmail = "" // false

const userEmail = [] // true

if(userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't have user email");
}

// Falsy values
// false, 0 , -0 , BigInt 0n, "", null, undefined, NaN  -> This is all false values when you apply condition

// truthy values
// true,1,-1,"0",'false'," ", [] , {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
}

if(false == 0) {
    console.log("true");
}
if(false=="") {
    console.log("true");
}
if(0 == "") {
    console.log("true");
}

// Nullish Coalecing Operator (??): null, undefined
let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10  // null is not safety that's why it print 10

// val1 = undefined ?? 15  // 15

// val1 = null ?? 10 ?? 15 ?? 39 // 10

// console.log(val1);


//  Ternory Operator
// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More Than 80");

