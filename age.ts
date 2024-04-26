
function isLegal(age: number){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

let voting = isLegal(16);
console.log(voting)