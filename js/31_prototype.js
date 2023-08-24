function multipleBy5(num) {
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}


// new user defined function in prototype
createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.print = function() {
    console.log(`score is ${this.score}`);
}
const user1 = new createUser("RedBul", 25)
const user2 = new createUser("tea",250)

// user1.print()


// prototype in js

let myName = "Rohit     "

console.log(myName.length);
// console.log(myName.trim.length);
console.log(myName.trueLength());

let myHeros =['thor','spiderman']

let heroPower = {
    thor:"Hummer",
    spiderman:"sling",

    getSpider: function(){
        console.log(`Spidy power is ${this.spiderman} `);
    }
}

Object.prototype.rohit = function() {
    console.log('rohit is present in all object');
}

// heroPower.rohit()
myHeros.rohit()


Array.prototype.heyRohit = function() {
    console.log('hey rohit');
}

myHeros.heyRohit()
// heroPower.heyRohit() // erroe this function has not access


// prototype inheritance 

const User = {
    name:"ROhit",
    email:"rohit@google.com"
}
const teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fulltime: true,
    __proto__:TeachingSupport  // access the value
}

teacher.__proto__ = User  // teacher access the value of User

// modern syntax
Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUserName = "RohitTawade"

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()