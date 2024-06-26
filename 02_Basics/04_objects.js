//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.age = 25
tinderUser.isLocation = false


// console.log(tinderUser);

const regularUser = {
    email: "aryan@kilil.com",
    fullname: {
        userfullname: { 
        firstname: "hitesh",
        lastname: "mishra"
    }
}
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2) //  Object.assign will assign sorce to the target object
//const obj3 = Object.assign({}, obj1, obj2) // its is good practice to give {} with the objects and if we didnt give {} then all vlaues will go in obj1
// here { is the target object adnd obj1,2,3 are source objects}

const obj3 = {...obj1, ...obj2} // most of the time hm yhi wala use krengy syntax because ye easy h

// console.log(obj3);


const users = [
    {
        id: 1,
        name: "Aryan",
        email: "aryan@gmai9l.com"
    },
    {
        id: 1,
        name: "Aryan",
        email: "aryan@gmai9l.com"
    },
    {
        id: 1,
        name: "Aryan",
        email: "aryan@gmai9l.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // very very important
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // comparatively kam use ata hai pr syntax imp h toh yaad rakho

// console.log(tinderUser.hasOwnProperty('isloggedIn')); 
// to check that this or that property is present or not the o/p will be in true or false

// +++++++++++++++++++++++++++++++++++++++++de-struturing ++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursrname: "js in hindi",
    price: "999",
    courseInstructor: "hyitesh"
}

// course.courseInstructor // basic calling

// const {courseInstructor} = course
const {courseInstructor: instructor} = course // we gave a short name to courseuntructor (de-struturing)
// kahin bhi { } iska syntax aye toh smaj jana ki destructuring ki ja rhi h
console.log(instructor);


// +++++++++++++++++++++++++++++++++++++++++++ JSON API INTRO ++++++++++++++++++++++++++++++++++++++++++++++++++

[
        
    {},
    {},
    {}
]



