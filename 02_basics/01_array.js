// ++++++++++++ arrays +++++++++++
const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Naagraj", "Doga", "Dhruv", "Shakti"];

// console.log(myArray[0]);

const myArray2 = new Array(1, 2, 3, 4, 5);

// Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(0);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(2));
let newArray = myArray.join();

// console.log(newArray);
// console.log(myArray);

// splice ,slice
console.log("A:", myArray);
const myn1 = myArray.slice(1, 3);

console.log(myn1);
console.log("B:", myArray);

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("C:", myArray);
