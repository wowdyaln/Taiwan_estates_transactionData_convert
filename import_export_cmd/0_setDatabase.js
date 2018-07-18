const fs = require("fs")
const dirPath = require("./lib/dir_path.js")
const database = require("./lib/database_name.js")
// select a MongoDB database

process.stdout.write(`
  dirPath : ${dirPath}

  MongoDB database : ${database}

  To select a MongoDB database.
  input the name of database （ e.g.  localDB  ）
  and press 'Enter'.

  >> >>`)

process.stdin.on("data", function (data) {
  let rootDir =
    `
  let database = '${data.toString().trim()}'; 
  module.exports = database; 
  `

  fs.writeFileSync('./lib/database_name.js', rootDir + "\n", 'utf8')

  console.log("Done! the path is set.")
  process.exit()
})