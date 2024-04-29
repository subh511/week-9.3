
// type Input = string | number;

// function firstElem(arr: Input[]){
//     return arr[0]
// }

// let final = firstElem(["samrat", "doe"]);
// console.log(final.toUppercase())

function firstElem<T>(arg: T){
return arg;
}

console.log(firstElem<string>("samrat"))
console.log(firstElem<number>(10))
console.log(firstElem<boolean>(false))