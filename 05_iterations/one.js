// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number.")
  }
  //console.log(element);
}
//console.log(element);

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value:${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value:${j} and inner loop ${i}`);
    //console.log(`${i}*${j}=${i * j}`);
  }
}
let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //console.log(element);
}

// Break and Continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`5 is a best number.`);
//     break;
//   }
//   console.log(`Value of i is :${i}`);
// }
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 is a best number.`);
    continue;
  }
  console.log(`Value of i is :${i}`);
}
