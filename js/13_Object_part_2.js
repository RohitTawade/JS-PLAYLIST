// Object -> Singleton (Constructor)

const tinderUser = new Object() // Singleton Object
const another= {} // non-singleton Object
console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    emial:"some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "ROhit",
            lastName:"Tawade"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName); // chaining 

// combine Object
const obj1 = {
    1:"a", 2:"b"
}
const obj2 = {
    3:"a", 4:"b"
}
const obj4 = {
    5:"a", 6:"b"
}


// const obj3 = {obj1, obj2} // same problem like array combine it means object inside object

// const obj3= Object.assign({},obj1,obj2) // {} -> this is optional but it good to add 
// const obj3= Object.assign({},obj1,obj2,obj4) // {} -> this is optional but it good to add 
// console.log(obj3); // assign -> return new Object copy


// most used to combine object using spread(...)
const obj3 = {...obj1, ...obj2, ...obj4} // recomded to to use this
console.log(obj3); 

// database object how to get

const users = [
    {
        id: 1,
        email:"rohittavad55@gmail.com"
    },
    {
        id: 1,
        email:"rohittavad55@gmail.com"
    },
    {
        id: 1,
        email:"rohittavad55@gmail.com"
    },
]

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // it gives only array inside object keys\
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check property exist or not



