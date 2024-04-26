"use strict";
function islLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(18));
function greet(user) {
    console.log("hi there " + user.firstName);
}
// isLegal({
//     firstName:"samrat",
//     lastName:"doe",
//     age:"25",
//     email:"samdoe@gmail.com"
// })
