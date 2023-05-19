const User = {
  name: "Kiriti",
  email: "glvsk@dev",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

createUser({ name: "kiriti", isActive: true });

function createCourse(): { name: string; price: number } {
  return { name: "TypeScript", price: 500 };
}

//weird behaviour of typescript
// function createUser({ name: string, isActive: boolean, email: string }) {}
//here the above statements shows error

//so to remove this error
const newUser = { name: "kiriti", isActive: true, email: "glvsk@dev" };
createUser(newUser);
//now no problem even email is passed or not

//Type Aliases in TypeScript

type User2 = {
  name: string;
  email: string;
  isActive: boolean;
};

function makeUser(user: User2): User2 {
  return { name: "", email: "", isActive: true };
}

makeUser({ name: "", email: "", isActive: true });

type User3 = {
  //ready only variable we can't change it
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
  //here ? syntax means it is optional
};

let myuser2: User3 = {
  _id: "12345",
  name: "kiriti",
  email: "glvsk@dev",
  isActive: true,
  //optional creditcard fetails
};

myuser2.email = "kiritiNew"; //allowed
// myuser2._id = "sdf"; //Not Allowed

type CardNumber = {
  cardnumber: string;
};

type CardDate = {
  cardDate: string;
};

type cardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

export {};
