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

function loginUserMessage(username = "shyam") {
  if (!username) {
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("abhi"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
  username: "abhishek",
  price: "100",
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}.`
  );
}

//handleObject(user);
handleObject({
  username: "shyam",
  price: 1000,
});

const myNewArray = [200, 400, 100, 600];

function returnArrayValue(getArray) {
  return getArray[1];
}
//console.log(returnArrayValue(myNewArray));
console.log(returnArrayValue([1000, 10, 10000, 1000000]));
