const fs = require('fs');
const path = require('path')

const dirPath = path.join(__dirname, 'files');

// this function will create files
for (let index = 0; index < 5; index++) {
   fs.writeFileSync(path.join(dirPath, `text${index + 1}.txt`), `Count ${index + 1}`)
}