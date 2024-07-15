class User {
    constructor(username){
        this.username = username;
  }

  logMe(){
    console.log(this.username);
  }

  static createId(){    // static will not give access to any user of createId method
    return`123456567`
  }
}

const aryan = new User("aryanaa")
//console.log(aryan.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email 
   }
}

const android = new Teacher("androidd", "android@hamil.com")
console.log(android.createId());  // will throw error because we gave static keyword to createId
android.logMe()