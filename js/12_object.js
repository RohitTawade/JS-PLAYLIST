// Object -> imp is Object And Events

// Object -> there are two types of declaration of Object 
// 1. Literal 2. Constructor -> Singleton
// Object store value in key and value format

// Object Literals
// Object.create()  another way to create Object

// Symbol

const mySym = Symbol("Key1") // iterview Q-> how to add Symbol in Object

const JsUser = {
    name:"Rohit",
    "full name":"Rohit Santram tawade", // not possible access using .(dot).
    [mySym]:"mykey1", // this way to add symbol in Object
    age:20,
    location:"Maharashtra",
    email:"rohittavade55@gmail.com",
    isLoggedIn: false,
    lastLoginInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); //accessing
// console.log(JsUser["email"]); // another way for accessing
// console.log(JsUser["full name"]); // access using string value
// console.log(JsUser[mySym]); // access using string value


// JsUser.email = "rohittavade55.com"
// console.log(JsUser.email);
// Object.freeze(JsUser) // When we use freeze then we cannot change 
// JsUser.email="RohitTawade@gmail.com" // this value not changed
// console.log(JsUser);


JsUser.greeting = function() {
    console.log(`HEllo JS User. ${this.name}`);
}

console.log(JsUser.greeting); // it returns reference
console.log(JsUser.greeting()); 