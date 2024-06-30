const myObject = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["js", "rb", "py", "cpp"]  // arrays ki bhi keys hoti hai and by default number hi hoti hai

for (const key in programming) {
    console.log(programming[key]);  // correct syntax 
   
}




// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// for (const key in map) {
   
//     console.log(key);
// }

// maps k upar iterations ni miya ja skta 