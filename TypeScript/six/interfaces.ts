interface User {
  readonly DbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrail: () => string; this is also valid
  startTrail(): string;
  getCoupon(coupunname: string, value: number): number;
  //this above are methods
}

//This is known as reopening of a interface
//In type keyword wee can not write
interface User {
  githubToken: string;
}

//Now it is like it unherits all proprties from User
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const kiriti: Admin = {
  DbId: 25679,
  email: "kiriti@dev",
  userId: 123456,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "kiriti10", off: 10) => {
    return 10;
  },
};

kiriti.email = "kiriti@dev2.0";
// kiriti.DbId = 4545 produces error
