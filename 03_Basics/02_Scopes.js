//var c = 300 // global scope

 let a = 300

if (true){                               // curly braces hi scope hai

    let a = 10  
    const b = 20
   // var c = 30
     // console.log("INNER: ", a)

}   // inside If statement and inside {} braces all things under block scope and else are global scope

// console.log(a); // will give error
// console.log(b); // will give error
// console.log(c); // will print c which is 30 yhi dikkat h var k sath isiliye log avoid krte h var ko



function one(){
    const username = "aryan"

    function two () {
        const website = "youtube"
         // console.log(username);
    }

   // console.log(website);  // error will come and because of this error two() will not execute 
    //because the code will stop and exit after the error 

    two()
}

 // one()

if (true) {

    const username = "hitesh"
    
    if(username === "hitesh") {
        const website = "youtube"
        // console.log(username + website); // correct syntax run horha hai

    }
     // console.log(website);  // ye ni access hoga iska scope hi if tk hai 
    
}
 // console.log(username); // ye bhi access ni hoga kyu ki iska bhi scope ni h hmare pass




 // +++++++++++++++++++++++++++++++++INtrestinggg +++++++++++++++++++++++++++++++++++++++++


 console.log(addone(7));
 function addone(num) {
    return num +1 
 } 

//  console.log(addone(7)); // shifted above function


 
addtwo(5)  // will throw error because yha pr hmne func. ek variable me hold bhi krdiya hai
// this process is called - hoisting in javcascript
const addtwo = function(num) {
    return num + 2
 }

//  addtwo(5) 