
interface User{
    firstName: string,
    lastName: string,
    age: number,
    email?:string,
}

function islLegal(user:User){
    if(user.age >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(18))

function greet(user:User){
    console.log("hi there " + user.firstName)
}

// isLegal({
//     firstName:"samrat",
//     lastName:"doe",
//     age:"25",
//     email:"samdoe@gmail.com"
// })
