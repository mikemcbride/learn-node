const fs = require('fs')
const path = require('path')

module.exports = function (dirName, extension, cb) {

  fs.readdir(dirName, (err, list) => {
    if (err) {
      return cb(err)
    }

    list = list.filter(file => path.extname(file) === '.' + extension)

    cb(null, list)
  })
}
