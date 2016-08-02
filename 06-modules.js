const myFirstModule = require('./myFirstModule')

const dirname = process.argv[2]
const ext = process.argv[3]

myFirstModule(dirname, ext, (err, data) => {
  if (err) {
    throw err
  }

  data.forEach(file => {
    console.log(file)
  })
});
