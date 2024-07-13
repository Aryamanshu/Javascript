class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;

    }

    // very very imp topic
   
   
    get email(){    // agr getter sdefine kr rhe ho toh setter bhi define krna hi padega
        return this._email.toUpperCase();  // _email ek tarah se private property ban gyi hai
    }

    set email(value){
      //  this.email = value;  // ek error ayega maximum call stack size exceeded
        this._email = value.toUpperCase();
    }
}


const Aryan = new User ("aryan@ai", "1223123214")
console.log(Aryan.email);


// somwtime we want control in our code then we use gettewr setter 

// console.log(Aryan.password);