// Date 

let myDate = new Date()
// console.log(myDate); 
// console.log(myDate.toString()); // indial standard date currunt in String
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); 
// console.log(myDate.getTime());
// console.log(typeof(myDate)); // Object

// Custom Date 

// let myCreatedDate = new Date(2023,0,23); // month start with 0/
let myCreatedDate = new Date(2023,0,23,5,3); // month start with 0
let myCreatedDateAnother = new Date("2023-01-13"); 
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

// console.log(myCreatedDateAnother.toLocaleString()); // Date With Time 

// // Indian Date 
// let indianFormatDate = new Date("01-14-2023");

// console.log(indianFormatDate.toLocaleString());

// let myTimeStamp = Date.now();
 
// console.log(myTimeStamp); // miliSecond values in date 
// console.log(myCreatedDate.getTime());

// interview
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getMonth());
// console.log(newDate.getDay()); 

// // String interpulation in date 
// console.log(`${newDate.getDate()} today date and day in week is ${newDate.getDay()}`);


// Format local string date 
console.log( newDate.toLocaleString('default', {
    weekday: "long", 
    
})); // here print only weekday
