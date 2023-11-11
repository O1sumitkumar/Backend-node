const fs = require('fs');

// if we just want to only import specific module 

const fss = require('fs').writeFileSync
console.log(fss("new.js", "new example for specific module import"));

// ? This fs function to write some file and data 
fs.writeFileSync("hello.txt", "Some information")

// to get directory name
console.log("====>>", __dirname)

// to get file name
console.log("====>>", __filename)


