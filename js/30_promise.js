// promise introduce in ES6

// creating promises
const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls , cryptography , network call

  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  // return value
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
  }, 1000);
  resolve(); // madatory to to add this method because .then execute
}).then(() => {
  console.log("Async to resolve");
});

// How to transfer data in .then means resolve
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "rohit", email: "rohit@example.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user); // data added
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // true
    if (!error) {
      resolve({ username: "Rohit", password: "1234" });
    } else {
      // rejection provides error
      reject("ERROR: Something went wrong ");
    }
  }, 1000);
});

// chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise is either resolved or rejected ");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true; // true => error
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Something went Wrong");
    }
  });
});

// async await altarnative for promise

async function consumedPromiseFive() {
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}
consumedPromiseFive();

// async function getAllUsers() {
//   try {
//     const respone = await fetch("https://jsonplaceholder.typicode.com/users"); // Object return one promise
//     console.log(respone); // you need to convert into json
//     const data = await respone.json(); // await for genrating json format
//     console.log(data);
//   } catch (error) {
//     console.log('E: ',error);
//   }
// }

// getAllUsers();

// same above another way
// hare dont need to try catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})