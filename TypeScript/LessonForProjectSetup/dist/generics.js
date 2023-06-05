"use strict";
//generics is very useful as with them we can reuse the components
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
identityTwo("kiriti");
function identityThree(val) {
    return val;
}
// identityThree("kiriti")
// identityThree<string>("kiriti")
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({});
//here inplace of T[] we can also write Array<T> both are same
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//<T> also ok in place of <T,> becasue to mention that it is a generic
const getModeSearchProducts = (products) => {
    //database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
