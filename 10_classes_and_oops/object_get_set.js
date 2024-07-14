const User = {
    _email: 'haasfdj@gmail.com',
    _password: "abc",



get email(){  // memeroy se leke aao
    return this._email.toUpperCase()  // whennver we use get or set the meaning of underscore(_) does not have that effect
},

set email(value){
    this._email = value
}


}

const tea = Object.create(User)
console.log(tea.email);  // ab phle hmne emial() naam ka method bnya tha but yha log me email pass kr rhe na ki emial() 
// so yhi kaam h getter and setter ka 
// memory se value leke anaa and leke jana yhi kaam ko overwrite krna ka process krta h getter and setter ka.