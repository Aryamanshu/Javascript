const name = "aryan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`HELOO my name is ${name} and my repocount is ${repoCount}`);
// using back-ticks 
// modern syntax, better redable, called string interpolation

const gameName = new String('Aryanbhai')

console.log(gameName[0]);
console.log(gameName.__proto__);

// SOME METHODS used in STRINGS
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString); // returns empty string


const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // .trim() removes the statring places 

// using replace method
const url = "https://ramnaresh.com/ram20%nnaresh"
console.log(url.replace('20%', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));    