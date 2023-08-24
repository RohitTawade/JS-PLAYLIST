// Array -> It is a Hectroginius type of hare we can add multiple type of data

const myArray = [0,1,2,3,4,5];

// console.log(myArray[0]); // index access 

// IMP -> Interview
// whenever we copy the array then it gives us shallo copy it means it is object whoose properties share the same copy.

// Deep Copy -> deep copy do not share the same referances 

const myHeros = ["Shaktiman", "Nagraj"];
const myArray2 = new Array(1,2,3,4,5);  // another way

// Array Methods

// myArray.push(6); // add the values in array
// myArray.push(7); // add the values in array
// myArray.pop(); // last index will remove this method
// console.log(myArray);

// myArray.unshift(9); // it add value in start index but it is not optimized why because if in array big size then it takes long cpu time to execute.
// myArray.shift() // first index will be remove in array and it has no parameter
// console.log(myArray);

// console.log(myArray.includes(9)); // false

// console.log(myArray.indexOf(-3));  // -1 always if value in array not present
// console.log(myArray.indexOf(0)); // 0 for true 


// const newArray = myArray.join();

// console.log(newArray); // it convert into string join() we can check also type of
// console.log(myArray); 


// slice and splice

console.log("A", myArray);

const mynewAr1 = myArray.slice(1,3); // return an copy of section an array index value here 3 not include

console.log(mynewAr1);
console.log("B",myArray);

const mynewAr2 = myArray.splice(1,3); // when we use splice then it change the original value and removes slice represented index value.

console.log("C",myArray);
console.log(mynewAr2);








