// javascript arrays are resizable

// ways of declaring arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["spiderman", "batman", "ram"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);


// Array Methods

// myArr.push(6) // push me parameter dete h
// myArr.push(7)  
// myArr.pop()  // pop me koi parameter ni dete

myArr.unshift(9) // added 9 at the beg of the array.
myArr.shift()
 

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));


const newArr = myArr.join()

// console.log(myArr); 
// console.log(newArr); // converted array to string
// console.log(typeof newArr);



// slice, splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// the diff between splice and slice is this that splice will manipulate the original array while slice will not