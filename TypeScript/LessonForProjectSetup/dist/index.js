"use strict";
//class
class User {
    //and inputs email name are assigned to the above
    constructor(email, name) {
        this.city = "Guntur"; // we should initialize i fit is not in constructor
        this.email = email;
        this.name = name;
    }
}
const kiriti = new User("glvsk@dev", "kiriti");
kiriti.city = "Delhi"; // you can do
//you cant do if we mentioned readonly in class
//private and public classes
class User2 {
    constructor(email, name, UserId = "ef") {
        this.email = email;
        this.name = name;
        this.UserId = UserId;
        this.city = "guntur";
    }
}
const abcd = new User2("abbsj", "lkkde");
