// check even or odd

// function EvenOdd(i){
  
//     if(i % 2 == 0){
//         console.log("Even")
//     }else {
//         console.log("Odd")
//     }
// }
// EvenOdd(89)


// square of a number

// function square(number){
    
//         console.log(number*number);
    
// }
// square(5)


//max. of two numbers


// function max(num1, num2){
//         if(num1 > num2){
//                 console.log(num1);
//         }else {
//                 console.log(num2);
//         }
// }
// max(55, 34)


//concatenate two strings


// var str1 = "ary"
// var str2 = "anmishra"

// function con(){
//         console.log(str1.concat(str2)); // concat is the predefined method to concatenate something
// }
// con()


// arrow func sum of two numbers

//approach-1
// const addtwo = (num1, num2) => (num1 + num2)

// console.log(addtwo(12,3));


//approach-2
// const addtwo = (num1, num2) => {
//         return (num1 + num2)
// }
// console.log(addtwo(34, 8));


//check if srring conatins a specific character 

// const check = (str, char) => {
//         if(str.includes(char)){
//                 console.log("yes");
//         }else {
//                 console.log("no this character is not present in the string")
//         }
// }
// check("aryan", "m");


//function parameters // veryy veryyyyyy imp // this all is acc to EMCAscript 2015


// function twoPara(a, b=1) {
//          return a*b 
// }

// console.log(twoPara(6));
// console.log(twoPara(6, 5));


//Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age


// function greet(name, age = 25) {
//         return `Hello, ${name}! You are ${age} years old.`;
// }

// console.log(greet("aryan"));
// console.log(greet("bhaiya",55))


// high order function
// Array.prototype.forEach()
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()
// setTimeout() and setInterval() (which take a function as an argument)
// addEventListener() (which takes a function as an argument)


function repeat(fn, n) {
        for (let i = 0; i < n; i++) {
          fn();
        }
      }

function sayHello() {
        console.log("Hello!");
      }
      
      repeat(sayHello, 3); // Output: "Hello!" printed 3 times

      

function greet(name) {
          console.log(`Hello, ${name}!`);
        }
        
        repeat(greet, 2, "Alice");


