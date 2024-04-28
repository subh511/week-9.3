"use strict";
//type KeyInput = "up" | "down" | "left" | "right" ;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPresseed) {
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);
