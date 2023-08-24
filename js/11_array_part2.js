const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heors = ["Superman", "flash", "Datman"]

// marvel_heros.push(dc_heors);

// console.log(marvel_heros); // Hare array not merged hare array with array combined 

// console.log(marvel_heros[3][1]); // flash

// const allHeors = marvel_heros.concat(dc_heors) // it return new array 
// console.log(marvel_heros);
// console.log(allHeors);  


// Spread operator -> Spread the Arraycls

const  allNewHeros = [...marvel_heros, ...dc_heors];

// console.log(allNewHeros);

// Array inside array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array= another_array.flat(Infinity) // here we combine array inside array in one form using flat and one parameter is 1,2,3,4 Depth but also we can provide Infinity

console.log(real_another_array);

console.log(Array.isArray("Rohit")); // false
console.log(Array.isArray(["Rohit"])); // true 
console.log(Array.from("Rohit")); // it convert into array
console.log(Array.from({name:"Rohit"})); // interview imp -> Hare we need to define key or value for accessing otherwise it will give us empty array-> []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // return array set of elements


