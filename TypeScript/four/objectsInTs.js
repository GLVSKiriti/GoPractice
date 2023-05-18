"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Kiriti",
    email: "glvsk@dev",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "kiriti", isActive: true });
function createCourse() {
    return { name: "TypeScript", price: 500 };
}
//weird behaviour of typescript
// function createUser({ name: string, isActive: boolean, email: string }) {}
//here the above statements shows error
//so to remove this error
var newUser = { name: "kiriti", isActive: true, email: "glvsk@dev" };
createUser(newUser);
function makeUser(user) {
    return { name: "", email: "", isActive: true };
}
makeUser({ name: "", email: "", isActive: true });
