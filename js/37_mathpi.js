const descripter = Object.getOwnPropertyDescriptor(Math,"PI") // to know any property you want to know here we check Math property

// console.log(descripter); 

// console.log(Math.PI);
// Math.PI = 5 // not override
// console.log(Math.PI);

// we cannot change PI value because 
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false

// this type of object we can create 
const mynewObject = {
    name:"tea",
    price:250,
    isAvailable:true,
    orderChai: function() {
        console.log("tea not maked");
    }
}

console.log(Object.getOwnPropertyDescriptor(mynewObject,"name")); // here we can check all property description
// change the custom behaviour
Object.defineProperty(mynewObject,'name',{
    // writable: false,
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(mynewObject,'name'));

for (const [key,value] of Object.entries(mynewObject)) {

    if(typeof value !== 'function'){
    console.log(`${key}: ${value}`); // name not added here 
    }
}