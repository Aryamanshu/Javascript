//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++STACK AND HEAP MEMORY++++++++++++++++++++++++++++++++++

// stack (primitive), heap (non-primitve)
// stack me hamesha ek copy hi milta hai jo store hua hota  h
// heap me reference milta hai
// if we change anything in heap then we r indirectly changing the original data

let myYoutubename = "aryanmishradotcom"

let anothername = myYoutubename
anothername = "aryannaughty"

console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
}

let userTwo = userOne
userTwo.email = "user@facebook.com"

console.log(userOne.email);
console.log(userTwo.email);