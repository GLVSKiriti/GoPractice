//Arrays
const superHeros: string[] = [];
// const heroPower: number[] = [];
//or
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const AllUsers: Array<User> = [];
//const AllUsers: User[] = []

const MLModles: number[][] = [[255, 255, 255], []];

superHeros.push("spiderman");
heroPower.push(2);
AllUsers.push({ name: "kiriti", isActive: true });

//unions
//it can return any one of the type number string
let score: number | string = 33;

score = 44;

score = "55";

type User2 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let kiriti: User2 | Admin = { name: "kiriti", id: 1234 };

kiriti = { username: "glvsk@dev", id: 1234 };

function getDbId(id: number | string) {
  //   id.toLowerCase(); error bcz type is not always string

  if (typeof id === "string") {
    id.toLowerCase();
    //Now now error
  }

  console.log(`DbId is ${id}`);
}

getDbId(3);
getDbId("3");

//array

const data: string[] = ["a", "b", "c"];
const data2: number[] = [1, 2, 3];
const data3: (string | number)[] = ["1", "2", 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";error

//tuples
let tUser: [string, boolean, number];
tUser = ["a", true, 1];
//not only type but order also important in tuple

type User6 = [number, string];

const newUser: User6 = [112, "abcd@dev"];

newUser[1] = "asdd";

//enums
const enum SeatChoices {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const glvskSeat = SeatChoices.AISLE;

export {};
