const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log("Welcome " + this.username); // here this is reffering to current context
        console.log(this);
    }


}

// user.welcomeMessage()

// user.username = "sam" //  yha par value is changed
// user.welcomeMessage()

console.log(this);  // jab hm node enviornment me hai toh this will refer to empty {} kyu ki koi global scope ni h
// but agr same cheez browser me kiya toh ye refer krega window() ko
// kyuki browser k ander jo globol object h vo h window() // IMP //



// function chai() {
//     let username = "Aryamanshu"
//     console.log(this); // yha par this will refer to global object
//    // console.log(this.username); // will throw undefined

// }

// chai()



// const chai = function() { // same as before will throw undefined
//     let username = "Aryamanshu"
//     console.log(this.username);
// }

// chai()



//  const chai = () => { 
//      let username = "Aryamanshu"
//      console.log(this.username);
     
//      }
//      chai()


// +++++++++++++++++++++++++++++++++++++  ARROW FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
// basic arrow function
//     return num1 + num2
// }



const addTwo = (num1, num2) => (num1 + num2)   // {} ye use hua toh return likhna padega
// () ye use hua toh return nhiiii likhna padega  //  very very useful when we study react
// also we () called this as implicit return 
// and when we use {} this we called that explicit return

console.log(addTwo(3, 9));







 
