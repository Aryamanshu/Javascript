const user = {
    username: "aryanmishra",
    loginCount: 8,
    signredIn: true,

    getUserDetails: function(){
       // console.log("got user details from database")
       //console.log(`Username: ${this.username}`);
       console.log(this);  // current context will be printed

    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  // value will be {} (kuch ni h)


// constructor functions

// const promiseOne = new Promise()

// const Date = new Date()

function User(username, isLoggedIn, LoginCount){
    
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = LoginCount;

    this.greeting = function()
{
    console.log(`Hello ${this.username}`);
}
    return this  // ye likho chahe na likho ye return hota hi h par likha is a good practice
}


// const userOne = User("aryan", 12, true) 
// const userTwo = User("namaste bhai", 19, false)  // usertwo will overwrite upon userone thats why we use constructor functition like 'new' keyword


const userOne = new User("aryan", 12, true)
const userTwo = new User("namaste bhai", 19, false)


console.log(userOne.constructor)  // refernece of user
//console.log(userTwo)