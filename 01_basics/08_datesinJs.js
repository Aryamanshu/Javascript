// dates // date ek object hai

let d = new Date()
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());
// console.log(typeof d);


// let myCreateDate = new Date(2024, 0, 25)

// let myCreateDate = new Date(2024, 0, 25, 5, 3)
// let myCreateDate = new Date("2024=01-14")
let myCreateDate = new Date("01-14-2024")
console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    
})