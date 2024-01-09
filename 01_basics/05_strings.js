const name = "abhishek";
const repoCount = " 05";

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String("Abhi-shek-fc");

// console.log(gameName.__proto__);
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(-4,8);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   abhi   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20pratap";
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

 console.log(gameName.split('-'))


