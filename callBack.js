//?  this function will register in call stack
console.log("Function start ");

//?  this will be register in node api
setTimeout(() => {
  console.log("I will be called after 2 second");
}, 2000);
//? ====>>> this both of them will be waiting ( in callback queue) after finishing their given time interval for call stack to be cleared
// as above
setTimeout(() => {
  console.log("I will be called in 0 seconds");
}, 0);

//? this will be register in call stack
console.log("Function end ");
