//var a = 30;
//let b = 100;
// const c = 200;

if (true) {
  var a = 300;
  let b = 400;
  const c = 200;
  //console.log(`INNER:`, b)
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

//console.log(a);
//console.log(b);
//console.log(c);

//+++++++++++++++++interesting+++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

addTwo(6);
const addTwo = function (num) {
  return num + 2;
};

