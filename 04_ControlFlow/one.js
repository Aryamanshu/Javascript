// if statement

// if(condition) {
//     // code to be executed if condition is true
//     }


if (2 == 2) {
    console.log("True");
}

const isUserLoggedIn = true
// "=" means we r telling taht this thing is equal to that but 
// "==" means we asking the ? that this thing is equal to that thing or not
// "!="  not equal hai ki nhi 
// "===" ye eqality k saths ath datatype bhi check krta hai 
// "!==" 


const temperature = 41

if(temperature < 50) {
    console.log("It's cold outside");
}else {
console.log("teemperature is greater than 50 ")
}



// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);

// }
// console.log(`user power: ${power}`);


// const balance = 1000
 
// if (balance < 500)  {

//     console.log("less than 500");
    
// }else if (balance < 750) {
//     console.log("less than 750");
// }
 // nesting



const UserLoggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (UserLoggedIn && debitcard) {  // && ka mtlb h dono conditions true hona chaiye

    console.log("allow them to buy  a course")
    
}

if (loggedInfromGoogle || loggedInfromEmail) { // ek condition true hogi toh chalega
    console.log("User Logged In")
    
}