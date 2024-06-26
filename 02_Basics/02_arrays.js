const marvel_heroes = ["thor", "spiderman", "Ironman"]
const dc_heroes = ["superman", "flash","batman"]

marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);

// arrays will take any kind of data like,  here it takes array as an data!

//console.log(marvel_heroes[3][1]); // its not a good syntax to access "flash"

const allheroes = marvel_heroes.concat(dc_heroes) // Combines two or more arrays. This method returns a new array without modifying any existing arrays

//console.log(allheroes);

const all_new_heros = [...marvel_heroes, ...dc_heroes]
 
// spread operator

console.log(all_new_heros); // it will give us a single array with all the elements

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

let real_another_array = another_array.flat(Infinity) // .flat will take all arryas into 1 array.
// Infinity is the depth for the array
console.log(real_another_array);


// console.log(Array.isArray("AryanMishra")); // ye hmne poocha ki array hai kya toh o/p aya falase ki aise koi array ni h
// console.log(Array.from("AryanMishra")); // .from ne array bna diya aryanmishra ka

// console.log(Array.from({name :"AryanMishra"})); // ye array me convert ni kr payega  // good for inetrview perspective

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));