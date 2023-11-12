const fs = require("node:fs");
// import { readFile } from "node:fs";
const path = require("path");

const dirPath = path.join(__dirname, "files");
const fileToBeRead = `${dirPath}/text4.txt`;

// this function will create files
for (let index = 0; index < 5; index++) {
  fs.writeFileSync(
    path.join(dirPath, `text${index + 1}.txt`),
    `Count ${index + 1}`
  );
}

// this function will read directory
fs.readdir(dirPath, (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    throw err; //?  this line will terminate function call
  }
  console.log("Reading", data);
});

// this function will update file value
let fd;
try {
  //? Open the file in append mode
  fd = fs.openSync(fileToBeRead, "a");
  //? Append data to the file
  fs.appendFileSync(fd, "data to append", "utf8");
} catch (err) {
  // Handle the error
} finally {
  //?  all done then this function will close the file
  if (fd !== undefined) fs.closeSync(fd);
}

// this function will read files of directory
fs.readFile(fileToBeRead, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// this function will rename file
fs.rename(fileToBeRead, `${dirPath}/newFile.txt`, (err) => {
  if (err) throw err;
  console.log("File rename successfully");
});

// this function will delete file
const fileToBeDelete = `${dirPath}/text2.txt`;
if (fs.existsSync(fileToBeDelete)) {
  fs.unlinkSync(fileToBeDelete, (err) => {
    if (err) throw err;
  });
  console.log("Deleted successfully");
} else {
  console.log("no such file exist");
}
