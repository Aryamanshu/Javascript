// PROMISE 1 

const promiseOne = new Promise(function(resolve, reject) {  // promise k 2 hi part h resolve and rejection // this the syntax to write a Promise
// here we hold a promise in a variable called promiseOne
      //Do an async task
      // DB calls, cryptography, network

      setTimeout(function(){
        console.log('Async task is completed');
        resolve()     // if we comment this promise is resolved will not be printed
      }, 1000)
})

promiseOne.then(function(){  // .then() ka direct connection h resolve k sath
    console.log('Promise is resolved');

})         



// another way of doing promise

// PROMISE 2


new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async task 2 is completed');
    resolve()
}, 1000)

}).then(function(){  // jaise hi resolve hoga ye part mil jayega
    console.log('Promise 2 is resolved');
})


// PROMISE 3

const promiseThree = new Promise((resolve, reject) => {
    setTimeout( function(){
    resolve({usernamE: "coffee", meail: "aryan@gmail.com"})  // resolve me jo bhi pas krengy vo .then me mil jayega
    },1000)
})


promiseThree.then(function(user){  // refers to the content of resolve() if any
    console.log(user);
})


// PROMISE 4

const promiseFour = new Promise(function(resolve, reject){
            
       setTimeout(function(){
        let error = true
        if(!error){
           resolve({username: "arynan", password: "1234"})
           }else{
            reject('Error')
            }

       }, 1000)
})



promiseFour.then((user) => {
    console.log(user);
    return user.username;

}) // here we r doing chaininggg // rememeber this syntax very imp
.then((username) => {
    console.log(username);

})
.catch(function(error){
    console.log(error);

})
.finally(function(){
    console.log('finally the promise id either redolved or rejected');
})



// PROMISE 5

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
           resolve({username: "Namaste", password: "1234"})
           }else{
            reject('Error js went wrong')
            }

       }, 1000)
})

async function consumePromiseFive(){  // database connection
   
    //const response = await promiseFive   // async await ka problem hai ki vo directly errors ko handle ni krskte
    //console.log(response);
   // we will use trycatch method

      try{
        const response = await promiseFive
        console.log(response);
        }catch(error){
        console.log(error);


        }
}

consumePromiseFive()



// async function getAllUsers (){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  // we have added await here because it takes time to convert in json
//         console.log(data);
   
//     } catch (error) {
//         console.log("E: ", error)
        
//     }
    
// }

// getAllUsers()

// using chaning/thenable method


// fetch()
// very very imp respective to interview purpose //
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
// Instead, a then() handler must check the Response.ok and/or Response.status properties.




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})

.then((data)=> {
     console.log(data);
})
.catch((error) => console.log(error))