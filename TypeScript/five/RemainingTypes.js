"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Arrays
var superHeros = [];
// const heroPower: number[] = [];
//or
var heroPower = [];
var AllUsers = [];
//const AllUsers: User[] = []
var MLModles = [[255, 255, 255], []];
superHeros.push("spiderman");
heroPower.push(2);
AllUsers.push({ name: "kiriti", isActive: true });
//unions
//it can return any one of the type number string
var score = 33;
score = 44;
score = "55";
var kiriti = { name: "kiriti", id: 1234 };
kiriti = { username: "glvsk@dev", id: 1234 };
function getDbId(id) {
    //   id.toLowerCase(); error bcz type is not always string
    if (typeof id === "string") {
        id.toLowerCase();
        //Now now error
    }
    console.log("DbId is ".concat(id));
}
getDbId(3);
getDbId("3");
//array
var data = ["a", "b", "c"];
var data2 = [1, 2, 3];
var data3 = ["1", "2", 3];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";error
//tuples
var tUser;
tUser = ["a", true, 1];
var newUser = [112, "abcd@dev"];
newUser[1] = "asdd";
var glvskSeat = "aisle" /* SeatChoices.AISLE */;
