let numbers = [2, 22, 3, 5, 57, 1, 12, 57, 14, 37, 100];
let numberSlice = numbers.slice(5,10);
// console.log(numberSlice)

// splice দিয়ে রেমোভ করা হয় আবার যোগ করা
/* let numberSplice = numbers.splice(3,4);
console.log(numberSplice);
console.log(numbers); */
// রিমোভ করার সাথে সাথে যোগ করা
let numberSplice = numbers.splice(3, 4, 200, 300, 400, 500);
console.log(numberSplice);
console.log(numbers);

