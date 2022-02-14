let anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
let words = anthem.split(' ');
let withoutA = anthem.split('a');
// console.log(withoutA);

// slice
let smallslice = anthem.slice(4,10);
console.log(smallslice);
// substr
let anotherPart = anthem.substr(11,6);
console.log(anotherPart);
// substring
let anotherPart2 = anthem.substring(11,18);
console.log(anotherPart2);
// concat
let firstName = 'Amader'
let secondName = 'desh'
// let fullName = firstName + secondName;
let fullName = firstName.concat(secondName).concat(' ').concat('Bangladesh');
console.log(fullName);
// join
let names = ['Sobuj','Sagor','Akash','Raju'];
// let allJoined = names.join('');
let allJoined = names.join(', ');
console.log(allJoined);