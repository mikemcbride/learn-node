var fs = require('fs');

var myFile = process.argv[2];

var fileContents = fs.readFileSync(myFile);
var newLineCount = fileContents.toString().split('\n').length - 1;

console.log(newLineCount);
