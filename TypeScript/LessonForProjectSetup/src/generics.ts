//generics is very useful as with them we can reuse the components
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}
identityTwo("kiriti");

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("kiriti")
// identityThree<string>("kiriti")

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({});

//here inplace of T[] we can also write Array<T> both are same
function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex];
}

//<T> also ok in place of <T,> becasue to mention that it is a generic
const getModeSearchProducts = <T>(products: T[]): T => {
  //database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): Object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3,{})

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
