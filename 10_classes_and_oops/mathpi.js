// // very very imp question related to Interviews


// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5  // we cant overwrite this 
// console.log(Math.PI);  // 3.141592653589793


// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);   //{
//                          //value: 3.141592653589793,
//                         // writable: false,   // ye itni hard coded false h ki we cant change it to true
//                         // enumerable: false,
//                         // configurable: false
//                         //}


const chai = {
    name: 'Ginger Tea',
    price: 250,
    isAvailable: false,
}                    

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai, 'name', {  // here we can change the property but sometimes not everytime
    //writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !=='function') {
   
    }
    
    console.log(`${key} : ${value}`);
}