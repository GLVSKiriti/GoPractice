//class
class User {
  email: string; // here belwo this.email is referring to this
  name: string;
  city: string = "Guntur"; // we should initialize if it is not in constructor
  //and inputs email name are assigned to the above
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const kiriti = new User("glvsk@dev", "kiriti");
kiriti.city = "Delhi"; // you can do
//you cant do if we mentioned readonly in class

//private and public classes
class User2 {
  private _courseCount = 1;
  protected _courseCount2 = 1;

  readonly city: string = "guntur";
  constructor(
    public email: string,
    public name: string,
    private UserId: string = "ef"
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  //getter which returns a string
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
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
