const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website.`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "shyam";
// user.welcomeMessage();

//console.log(this);

// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
// }

// chai();
const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(4, 6));

const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwoNum(4, 6));
