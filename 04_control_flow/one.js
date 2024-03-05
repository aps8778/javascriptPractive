// if

// < ,> ,= ,<= ,>= ,== ,!= ,=== ,!==
//const userIsLoggedIn = true;
const temperature = 40;

// if (temperature === 40) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }
//++++++++++++++++++++++++++++++++++

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power: ${power}`);
}

const balance = 1000;

//if (balance > 500) console.log("test"), console.log("test 2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

const userIsLoggedIn = true;
const debitcard = true;
const guestUser = true;

const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userIsLoggedIn && debitcard && 2 == 3) {
  console.log("Allow to buy course.");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
  console.log("user logged in");
}
