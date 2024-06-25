const score = 400
// console.log(score);


 const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // earlier balance was 100 noe it converted to a string 
// // it remains 100 only but the typeof is string adn .length will give how many characters are there i.e 3

// console.log(balance.toFixed(2));  // it will round off to 2 decimal places


const otherNumber = 123.8966 
// console.log(otherNumber.toPrecision(4));// it will give the number with 4 significant figures

const hundreds = 1000000 
// console.log(hundreds.toLocaleString('en-IN')); // it will give the number in the format of the locale of the browser

// +++++++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.ceil(7.2)); // it will round off to the next integer
// console.log(Math.floor(4.9));
// console.log(Math.round(4.9)); // it will round off to the nearest integer
// console.log(Math.max(1,2,3,4,5)); 
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.pow(2,3)); // it will give the power of 2 to the
// console.log(Math.sqrt(9)); // it will give the square root of 9


console.log(Math.random()); // it will give a random number between 0 and 1
console.log((Math.random()*10) + 1);  // we added to avoid 0 so the valuse will be  between 1-9
console.log(Math.floor(Math.random()*10)+ 1); // it will give a random number between 0 and 10 without decimal places


const min = 10
const max = 20


console.log(Math.random() * (max - min + 1) + min);
// here we use max - min to get the range and then added 1 to avoid 0 
//and then added min beacause minimum toh itna chaiye hi











