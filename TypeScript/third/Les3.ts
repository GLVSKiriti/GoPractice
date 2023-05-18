function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

//we are not allowed to do addTwo("5") which produces error
//if we didint mention type number above then it doesnt produces error
//but it is wrong

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("kiriti");

//we are not allowed to do getUpper(4) like this as above

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("kiriti", "LFX", true);

let loginUser = (email: string, name: string, isPaid: boolean = true) => {};

loginUser("a", "b");
//here if we even pass two variables no error because as in function onl default value is already mentioned

function newAddTwo(num: number): number {
  return num + 2;
  //return "hello"; not able to do this
}

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 ok";
// }
//In this above case it can return any one of the string or boolean type
//we can solve this problem through union

const getHello = (s: string): string => {
  return "";
  //if you dont return any string then you get an error
  //as we mentioned it returns a type string
};

const heros = ["thor", "spiderman", "ironman"];

//no need to mention here (hero: string) as typescript can understand it
heros.map((hero) => {
  return `Hero is ${hero}`;
  //return 2; we can also do it
});

//best practice
heros.map((hero): string => {
  return `${hero}`;
  //return 2; now we cant do it
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
  //return 1; produces error
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
//never type means it never returns any thing

export {};
