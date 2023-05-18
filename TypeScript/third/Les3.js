"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
//we are not allowed to do addTwo("5") which produces error
//if we didint mention type number above then it doesnt produces error
//but it is wrong
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("kiriti");
//we are not allowed to do getUpper(4) like this as above
function signUpUser(name, email, isPaid) { }
signUpUser("kiriti", "LFX", true);
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("a", "b");
//here if we even pass two variables no error because as in function onl default value is already mentioned
function newAddTwo(num) {
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
var getHello = function (s) {
    return "";
    //if you dont return any string then you get an error
    //as we mentioned it returns a type string
};
var heros = ["thor", "spiderman", "ironman"];
//no need to mention here (hero: string) as typescript can understand it
heros.map(function (hero) {
    return "Hero is ".concat(hero);
    //return 2; we can also do it
});
//best practice
heros.map(function (hero) {
    return "".concat(hero);
    //return 2; now we cant do it
});
function consoleError(errmsg) {
    console.log(errmsg);
    //return 1; produces error
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
