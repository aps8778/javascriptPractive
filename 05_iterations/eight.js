const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0);

const myTotal = myNums.reduce((acc, currv) => acc + currv, 0);
console.log(myTotal);
