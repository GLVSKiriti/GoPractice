"use strict";
//class
class User {
    //and inputs email name are assigned to the above
    constructor(email, name) {
        this.city = "Guntur"; // we should initialize if it is not in constructor
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
        this._courseCount = 1;
        this._courseCount2 = 1;
        this.city = "guntur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //getter which returns a string
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter **Which dont have any return type
    //so you cant mention any return type for a setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
//here in subuser class inherits all from user2 not private values
//private values cant be inherited
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4 error as we cant access private variables
        this._courseCount2 = 4; //now we can becase it is protected
    }
}
const abcd = new User2("abbsj", "lkkde");
// abcd.deleteToken() you cant access a private method outside only you can acces it in inside the class
//On whole
//public: It can be accessed from anywhere
//private: It can be accessed only with in that class
//protected: it can be accessed with in the class and in classes that inherits this parent class
//but still it cant be accessed outside this parentclass and inherited classes
