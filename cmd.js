const fs = require("node:fs");
const path = require("node:path");

const dirPath = path.join(__dirname, "files");
console.log(dirPath);
console.log(process.argv[2]);

const input = process.argv;
// fs.writeFileSync(input[2], input[3])

if (input[2] === "add") {
  // this is to create file
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
  // this is to delete file
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}

do {
  fs.writeFileSync(`example`);
} while (condition);

// this function will create new  files in loop
for (let index = 0; index < 10; index++) {
  fs.writeFileSync(dirPath + `/text${index + 1}.txt`, `Count ${index + 1}`);
  let filePath = path.join(dirPath, `text${index + 1}.txt`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

// this function will read files in loop
fs.readdir(dirPath, (err, files) => {
  if (err) throw err;
  console.log(files);
  files.forEach((fileName) => {
    console.log(fileName);
  });
});
