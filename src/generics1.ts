


function firstElem<T>(arr:T[]){
return arr[0]
}

const el = firstElem<string>(["Samrat", "Doe"]);
const elem = firstElem<number>([1,2,3,4]);
console.log(elem)
console.log(el.toLowerCase())