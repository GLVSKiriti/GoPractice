//class
class User {
  email: string; // here belwo this.email is referring to this
  name: string;
  city: string = "Guntur"; // we should initialize i fit is not in constructor
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
  readonly city: string = "guntur";
  constructor(
    public email: string,
    public name: string,
    private UserId: string = "ef"
  ) {}
}

const abcd = new User2("abbsj", "lkkde");
