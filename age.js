function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var voting = isLegal(16);
console.log(voting);
