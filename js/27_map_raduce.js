// const coding = ["js",'ruby','java', 'python','cpp']

// const values = coding.forEach((item) => { // for each does not return any value
// //     console.log(item);
//     return item   // -> forEach loop cannot return any value 
// })
// console.log(values); 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num) => { // -> filter return values but forEach not return 
//     return num > 4 // if you not return hare then it gives us empty array []
// } )
// console.log(newNums);


// Combine both array
// const newNums = []
// myNums.forEach((num) => {
//     if(num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genre:"Fiction", publish:1981, edition:2004},
    {title: 'Book two', genre: 'Non-Fiction', publish:1992,edition:2008},
    {title: 'Book Three', genre: 'History', publish:1999,edition:2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish:1989,edition:2010},
    {title: 'Book Five', genre: 'Science', publish:2009,edition:2014},
    {title: 'Book Six', genre: 'History', publish:1987,edition:2010},
    {title: 'Book Seven', genre: 'Non-Fiction', publish:1986,edition:1996},
]

// 1  condition
let userBooks = books.filter((bk)=>  bk.genre==='History' ) // real world filteration

// 2 condition
 userBooks = books.filter((bk) => 
 { 
    
    return bk.publish >= 1995 && bk.genre === 'History'
    
}) // if you add {} scope then mandotory to add the return keyword

// console.log(userBooks);



// map
const myNumbers = [1, 2, 3, 4, 5,6,7 ,8,9,10]

// const newNums=myNumbers.map((num) => num +10) // it method also return  value

// chaining
// const newNums = myNumbers.map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num>=40)
// console.log(newNums); 

// reduce -> 
const myNum = [1,2,3]
// this example we can use shopping card
const myTotal = myNum.reduce(function (acc,currval) {
    console.log(`accvalue: ${acc} and currval: ${currval}`);
    return acc + currval
}, 3) // accvalue start with = 3

// console.log(myTotal);

// above ex in arrow function
const myTotalSum = myNum.reduce((acc,currval) => acc+currval,3)
// console.log(myTotalSum);

const shoppingCart = [
    {
        itemName:'js course',
        price: 2999
    },
    {
        itemName:'py course',
        price: 999
    },
    {
        itemName:'data science course',
        price: 12999
    },
]

const totalPrice=shoppingCart.reduce((acc,item) => acc+item.price,0)

// console.log(totalPrice); // total price of all course