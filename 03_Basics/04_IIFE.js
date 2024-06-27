// Immediately Invoked Function Expressions (IIFE)

// function chai() {
 // ye ek named IIFE hai
//     console.log("DB CONNECTED");    
// } 
// chai()
 

(function chai() {
    console.log("DB CONNECTED");    
})(); // semicolon zarror lgana


 // ()() // like this we write IIFE functions
 // first parenthisi is about where we write our function defination and 
 // second parenthisi is where the xecution is happening 
 // for interview selection we have to say that ki global scope k pollution se prob hoti h kayi baaar ,
 // so us global scope k pollution ko hatane k liye IIFE ka use kiya


 ( () => {
    console.log(`db connected two`);
 }) ();  // semicolon zarror lgana


 ( (name) => {
    console.log(`db connected two ${name}`);
 }) ('aryanmishra');  // semicolon zarror lgana