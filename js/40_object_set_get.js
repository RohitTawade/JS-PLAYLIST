const User = {
    _email:'r@hc.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()

    },
    set email(value){
            this._email=value
    }
}

// factory function using creation of object
const tea = Object.create(User)
console.log(tea.email);