// ==========Immediately Invoked Function Expressions

// function chai() {
//   console.log("DB CONNECTED");
// }
// chai()
(function chai() {
    //named iife
  console.log("DB CONNECTED");
})();
( (name) =>{
  console.log(`DB TWO ${name}`);
})("abhi")
