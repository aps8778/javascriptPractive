// Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt;

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const bigNumber = 2345775113456n
const id = Symbol('123');
const anotherId = Symbol('123');

//Reference
// Arrays, Objects, Functions

const heros = ["shaktiman", "Naagraj", "Comando Dhruv"];

let myObj = 
{
    name:"abhishek",
    age:22
};
const myFunction = function(){
    console.log("Hello World");
}
//console.log(typeof scoreValue);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne;

userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)