// singleton
//object.create;

//Object.literals
const mySym = Symbol("key1");

const jsUser = {
  name: "abhishek",
  "full name": "Abhishek Pratap Singh",
  [mySym]: "myKey2",
  age: 20,
  location: "kripalpur",
  email: "abhishek@goole.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(jsUser."full name");
//console.log(jsUser[mySym]);

jsUser.email = "abhishek@chatgpt.com";

//Object.freeze(jsUser);
jsUser.email = "abhishek@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js user");
};
jsUser.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
