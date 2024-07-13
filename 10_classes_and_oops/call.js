function SetUsername(username) {

// Complex DB  calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password)
{
    SetUsername(username) // yah sirf reference gya call hua hi nhi hai
    SetUsername.call(this, username)  // refernce hold krne k liye jo method ata h vo hai .call
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);




