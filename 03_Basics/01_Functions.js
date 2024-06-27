// console.log("h");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");


function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayMyName() // calling the function for execution
// sayMyName // reference of the function but it will not execute

// function addTwoNumbers(num1, num2){   //  here num1 and num2 are parameters
//     console.log(num1 + num2);  
// }

// addTwoNumbers(33,4)  // here 33,4 are arguments
// addTwoNumbers(33, "6") // javascript khud dimag lgayega or sochega ki "6" ye toh string h toh vo 33 ko bhi string smjh lega
// // o/p will be 336

function addTwoNumbers(num1, num2){  
    
    // let result = num1+ num2
    // return result
    // console.log("hitesh"); // return k baad kuch bhi print ni hoga

    return num1 + num2
}

const result = addTwoNumbers(5, 6)

// console.log("Result: ", result);




function loginUserMessage(username){
    if(username === undefined){
          console.log("please enter a username");
          return
    }
    return `${username} just logged In`
}

loginUserMessage("Aryamanshu") // here we called the fucyion but we will not get the o/p because we didnt cosole.log
// console.log(loginUserMessage("Aryamanshu")) // now we will get the o/p

// console.log(loginUserMessage()) // yaha par koi value pass ni kri toh ans Null ni ayega ans ayaga Undefined



// function loginUserMessage(username = "ram"){
//     if(username === undefined){
//           console.log("please enter a username");
//           return
//     }
//     return `${username} just logged In`
// }

// console.log(loginUserMessage()) // ab yha hmne koi valye ni di h par hmne default value dedi h jo h "ram"
// // toh kabhio bhi undefined print ni hoga 
// console.log(loginUserMessage("shyam")) // ab yha  shyam dediya toh shyam will overwrite ram



// function calculateCartPrice(num1){
//     return num1

// }

// console.log(calculateCartPrice(200, 500, 300));
// yaha par hmne 3 arguments pass kiye h par function me sirf ek argument
// toh yaha par sirf 200 hi ayega baki 2 arguments ignore honge
// console.log(calculateCartPrice(200, 500, 300)); // 200



function calculateCartPrice(...num1){
    return num1

}

//console.log(calculateCartPrice(200, 500, 300)); 
// ab ye teeno ek array me ek sath print hongy because of three dots 




// function calculateCartPrice(val1, val2, ...num1){
//     return num1

// }

// console.log(calculateCartPrice(200, 500, 300, 900)); 
// yaha par val1 = 200, val2 = 500, aur baki 300, 900 ek array me akr print hojyega
// interview purpose question //



const user = {   // we have created the obj
    name: "ram",
   price: 199

}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
      name: "sam",
      price: 299
}) // we directly pass the object to the function before stating it earlier


const myNewArray = [200, 400, 1000]

function returnSecondValue(getArray){
return getArray[1]
}

console.log(returnSecondValue([200, 500, 1000]));