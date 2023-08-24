// for of loop

// const arr=[1,2,3,4,5]

// for (const iterator of arr) {
//     console.log(iterator);
// }

// const greetings = "Hello World!"
// for (const iterator of greetings) {
//     console.log(`each char is ${iterator}`);
// }

// // Maps -> It contains only unique values

// const map = new Map()
// map.set('IN', 'India')
// map.set('IN', 'India') // allowed only unique values
// map.set('USA', 'United states of America')
// map.set('Fr', 'France')

// console.log(map);

// // for(const key of map){
// for(const [key, value] of map){
//     console.log(key, ' : ', value);
// }

// const myObject = {   => TypeError: myObject is not iterable
//     'Game1':"NFS",
//     "game2":"spiderman"
// }
// for (const [key,value] of myObject) { => TypeError: myObject is not iterable
//     console.log(key, ' : ', value);
// }

const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"Ruby",
    swift:"swift by apple"
}
// using for in loop we can iterate to the Object
for (const key in myObject) {
    // console.log(key); => it prints key only
    // console.log(myObject[key]); => it prints values
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming =["js",'rb','java','c++','py']

for(let key in programming){
    // console.log(key); // return key -> 0,1,2,3,4 (index is key in array)
    // console.log(programming[key]); // return values
    // console.log(`${key} shortcut is for ${programming[key]}`); // key + values
}

// const map2 = new Map()
// // => Map is not iteratable in js it means we cannot loop on this
// map2.set('IN', 'India')
// map2.set('IN', 'India') // allowed only unique values
// map2.set('USA', 'United states of America')
// map2.set('Fr', 'France')

// for(const key in map2){
//     console.log(key); // blank
// }


// for each loop
const coding = ['js','ruby', 'java', 'python', 'c++']

// coding.forEach( function(item) {
//     console.log(item);
// })

// using arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe); // only hare add referance

// forEach parameters
// coding.forEach((item,index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [

    {
    languageName:"javascript",
    languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {

    console.log(item.languageName);

})