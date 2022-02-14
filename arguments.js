// number argument
function addNumbers(num1, num2){
    // console.log(arguments[1]);
    let result = 0
    for(let num of arguments){
        result = result + num;
    }
    // let result = num1 + num2;
    return result;
}
let sum = addNumbers(20, 10, 20, 50, 90, 10, 100);
console.log(sum);
// string argument
function getFullName (firstName, lastName){
    let fullName = '';
    for(let part of arguments){
        fullName = fullName + part + ', ';
    }
    return fullName;
}
let result = getFullName('abul', 'kabul', 'chabul', 'dabul', 'bolodbul', 'sobbul');
console.log(result);