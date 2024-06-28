const userEmail = []

if (userEmail) {

    console.log("got user email");
    
}else {
    console.log("no user email");
}

// in above ex. we didnt intialize or stated any true or false condiotion but then also we r gettting an output 
// because of truthy condition
// truthy or falsy is that condition where code assumes that the given condition is already true or already false
// falsy values are - false, 0, -0, bigInt 0n, "", null, undefined, NaN
// truthy values - "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// } //  to check  array is empty 


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");

} // to check object is empty or not


// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15


// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceteaPrice = 100

iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")