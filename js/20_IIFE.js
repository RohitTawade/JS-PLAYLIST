
// IIFC -> Immediately Invoked Function Expression (IIFE)

// Interview
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}());  // IIFC -> It is used to overcome the problem of global scope pulation problem then we use IIFC


// Arrow
( (name) => {
    // Unnamed
    console.log(`DB CONNECTED TWO ${name}`);
} )("ROhit")  // if you not use (;) for above function then hare this function give an error 