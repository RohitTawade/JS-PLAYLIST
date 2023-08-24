const store = 400;
// console.log(store);

// const balance = new Number(100);
// console.log(balance);

// console.log(typeof(balance.toString()));
// console.log(balance.toString().length);
// console.log(balance.toString());
// console.log(balance.toFixed(2)); // To fix the pricision 

// const onterNumber = 23.8966
// console.log(onterNumber.toPrecision(3)); // 1 to 25 range

// const hundreds = 1000000; // to calculate structured
// console.log(hundreds.toLocaleString()); // 10,00,000 in US
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 in indian price

// ======== Maths ===============

// IN js bydefault math library come with js.

// console.log(Math); // Properties and Methods come in browsers

// console.log(Math.abs(-4)); // absolute -> Only - value goes to the + it is called absolute
// console.log(Math.abs(4)); // absolute -> Only - value goes to the + it is called absolute


// console.log(Math.round(4.3)); // round of result is 4
// console.log(Math.round(4.5)); // round of result is 5 or more than 5 then it gives +1 value

// console.log(Math.ceil(4.2)); // ceil function give us always positive value +1

// console.log(Math.floor(4.9)); // it give always low values or floor value hare it gives 4

// console.log(Math.sqrt(25)); // return square root -> 5
// console.log(Math.min(4,23,24,3,3,344,2)); // return minimum value 2
// console.log(Math.max(4,23,24,3,3,344,2)); // return maximum value 344

console.log(Math.random()); // always it gives us random value between 0 and 1 under

console.log(Math.floor((Math.random()*20) + 1)); // formula for printing random number 1 to 20

// short Formula for defining the min and max number random

const min =10
const max = 20

console.log(Math.floor((Math.random() * (max-min+1)))+min)

