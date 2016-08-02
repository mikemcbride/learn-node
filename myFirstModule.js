var fs = require('fs')
var path = require('path')

module.exports = function (dirName, extension, cb) {

  fs.readdir(dirName, function (err, list) {
    if (err)
      return cb(err)

    list = list.filter(function(file) {
      return path.extname(file) === '.' + extension;
    })

    cb(null, list)
  })
}
