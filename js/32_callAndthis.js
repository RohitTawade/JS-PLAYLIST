function setUsername(username){

    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username) // called the above function
    this.email= email
    this.password=password
}

const rohit = new createUser("rohit","rohit@gmail.com","123")
console.log(rohit);