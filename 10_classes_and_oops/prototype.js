// let myName = "aryamanshu    "

// console.log(myName.truelength);
// // console.log(myName.trim().length);   // low iq wali baat hai asie ni krna hai



let myHeros = ["thor", "spiderman"]

// creating an object

let heroPower = {
    thor: "hammer",
    spiderman: "web",

 // defining a method

    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){  // yes its possible by using Object.prototype.
    console.log("hitesh is present in all objects")
}

Array.prototype.heyaryanbhai = function(){
    console.log(`aryan bhai say hello`);
}

//heroPower.hitesh()   // is it possible that we can do like this?

myHeros.hitesh()  // 

myHeros.heyaryanbhai()
// heroPower.heyaryanbhai()  // iske pass heyaryanbhai ka access ni h error ayega

                                
// Inheritance 
// Inheritance is the process of creating a new class from an existing class. The new class
// inherits all the properties and methods of the existing class. In JavaScript, we can
// use the prototype property to create a new class from an existing class. The new class
// will inherit all the properties and methods of the existing class. We can also add new
// properties and methods to the new class. This is called prototypal inheritance in JavaScript.
                                    

const User = {
    name: "aryan",
    age: 20,
    email: "aryan@gmail.com"

}


const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvaailable: false
}

const TASupport = {
    makeAssignment: 'JS ASSIGNMENT',
    fullTime: true,
    __proto__: TeachingSupport     // __proto__ will give 
}

Teacher.__proto__ = User


// modern syntaxxxxx

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiaurcode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.truelength()

"aryaan".truelength() // we can also direct access the prototype we created in the object
"icetea".truelength()




