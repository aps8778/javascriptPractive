function myName() {
  console.log("A");
  console.log("B");
  console.log("H");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("E");
  console.log("K");
}
// myName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(6, 7);

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
  return num1 + num2;
}

let result = addTwoNumbers(6, 7);
// console.log(result);

function loginUserMessage(username="shyam") {
  if (!username) {
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("abhi"));
