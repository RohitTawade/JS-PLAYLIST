class User {
    constructor(email,password){
        this.email = email
        this.password=password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
         this._email=value
    }
    get password() {
        return `${this._password.toUpperCase()}rohit`
    }
    set password(value) {
        this._password=value
    }
}

const rohit = new User('rohit@gmail.com','abc')
console.log(rohit.password);
console.log(rohit.email);