const fs = require('fs');

const myFile = process.argv[2];

const fileContents = fs.readFileSync(myFile);
const newLineCount = fileContents.toString().split('\n').length - 1;

console.log(newLineCount);
