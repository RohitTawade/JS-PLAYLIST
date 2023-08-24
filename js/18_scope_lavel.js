

function one() {
    const username = "Rohit"

    function two() { // it is also called as closure
        const website="Youtube"
        console.log(username);
    }
    // console.log(website); Not in Scope

    two()
}

// one()

// if(true) {
//     const username = "Rohit"
//     if(username === 'Rohit') {
//         const website = " Youtube"
//         console.log(username + website);
//     }
//     // console.log(website); 
// }

// ++++++++++++++++++++++++++++ INTRESTING ++++++++++++++++++++

// Normal Function

console.log(addOne(5)); // 6

function addOne(num) {
    return num + 1
}

// It called Expression that hold function in variable


// addTwo(5) // Not allowed 
const addTwo = function(num) {
    return num + 2
}
addTwo(5)