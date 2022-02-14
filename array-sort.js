// sort number
let number = [5, 2, 3, 6, 1, 8, 7, 9, 4,];
let sortNumber = number.sort();
console.log(sortNumber);
// sort string
let names = ['bidur', 'chik', 'abul', 'dabul', 'ginna', 'fatema', 'enamul', 'hasibul', 'akash', 'raju', 'sobuj'];
let sortNames = names.sort();
console.log(sortNames);
// sort reversed
let friends = ['bidur', 'chik', 'abul', 'dabul', 'ginna', 'fatema', 'enamul', 'hasibul', 'akash', 'raju', 'sobuj'];
let friendsReverse = friends.reverse();
console.log(friendsReverse);
//Big Number sort kora
let bigNumbers = [11, 20, 15, 88, 90, 14, 2, 22, 1, 100];
let sortBigNumbers = bigNumbers.sort(function(a, b){
    return a-b;
});
console.log(sortBigNumbers);
