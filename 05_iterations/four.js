const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift",
};

for (const key in myObject) {
 //console.log(key, ":-", myObject[key]);
}

const programming = ["js", "rb", "cpp", "py", "java"];

for (const key in programming) {
  console.log(programming[key]);
}
