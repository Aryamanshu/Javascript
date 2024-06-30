// forEach loop

const coding = ["js", "cpp", "ruby", "python"]

// coding.forEach( function (item) {   // because this function is a call back func. that why we dont have to give a name to that
//     console.log(item);
// })


// using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )




// function printMe(item) {
//     console.log(item);


// }
// coding.forEach(printMe)



// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item);
    console.log(item.languageName);
} )