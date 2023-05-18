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

export {};
