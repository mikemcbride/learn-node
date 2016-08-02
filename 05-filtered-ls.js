const fs = require('fs')
const path = require('path')
const extension = '.' + process.argv[3]

fs.readdir(process.argv[2], function callback (err, list) {
  list.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  })
})
