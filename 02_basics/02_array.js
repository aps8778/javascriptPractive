const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["superman", "flash", "batman"];
// marvelHeros.push(dcHeros);
// const allHeros = marvelHeros.concat(dcHeros);

// console.log(allHeros);
// console.log(marvelHeros[3][1]);

// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);

console.log(realAnotherArray);

// console.log(Array.isArray("bhishek"));
// console.log(Array.from("bhishek"));
// console.log(Array.from({name: "abhishek"}));//interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
