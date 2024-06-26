 // singelton // leterals declare krengy toh singelton ni bnaegaa

 //Object.create  // par agar constructors se  krengy toh singelton banega


 // object literals

 const mySym = Symbol("key1") // declaring symbol (datatype)

 const Jsuser = {
    name: "aryan",
    "full name" : "aryan mishra",// this iis not all accessible by dot notaion so we have to use [""] notation 
    [mySym]: "myKey1", // agar isko symbol ki trah use krna h toh [] iske ander likhna padega
    // always remember to use symbol we have to use []
    age: 22,
    location: "kanpur",
    email: "aryan@google.com",
    isloogedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
 }


// console.log(Jsuser.email) // accessing objects with dot notation
// console.log(Jsuser["email"]) // accessing objects with [] notation // very useful // very imp
// console.log(Jsuser["full name"])
// console.log(Jsuser.mySym) // here we accessed the symbol that we stored but its not the symbol datatype we are getting its string 
// console.log(typeof Jsuser.mySym)
// console.log(Jsuser[mySym]) //  right way of accesssing symbol 


// +++++++++++++how to change the value of the objects +++++++++++++++++++++++


Jsuser.email = "mishra@chatgpt.com" 
// console.log(Jsuser.email) 

// Object.freeze(Jsuser) // it will freeze the jsuser objevct and now anyone cant do changes in that object .
// also called "locking the object"

// Jsuser.email = "mishra@microsoft.com" 
// console.log(Jsuser.email) 
// it will not change the value of email because we have freezed the object



Jsuser.greeting = function(){
    console.log("hello world");
}

Jsuser.greetingTwo = function(){
    console.log(`hello world, ${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());