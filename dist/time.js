"use strict";
function returnedValue(fn) {
    setTimeout(fn, 1000);
}
returnedValue(function () {
    console.log("hello world");
});
