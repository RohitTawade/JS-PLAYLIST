// String ->

const name = "Rohit";
const repoCount = 50;

// console.log(name + repoCount + "Tawade"); // Not recomded

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // it is called String interpolation

const gameName = new String("Rohit-Tawade-Gaur"); // another way to declare

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // Property for finding length
// console.log(gameName.toUpperCase()); // original string not changed
// console.log(gameName.charAt(1)); // o
console.log(gameName.indexOf("R")); // 0

const newString = gameName.substring(0, 4); // Slicing
console.log(newString);

const anotherString = gameName.slice(0, 4); // Here We can put the negative values

const newStringOne = "   Rohit.   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.rohit%20tawade";
console.log(url.replace("%20", "-"));
console.log(url.includes("rohit")); // true
console.log(gameName.split(''));
console.log(gameName.split('-')); // Split 
