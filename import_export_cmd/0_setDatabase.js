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
  // set db for mongoimport.
  let rootDir =
    `
  let database = '${data.toString().trim()}'; 
  module.exports = database; 
  `
  
  fs.writeFileSync('./lib/database_name.js', rootDir + "\n", 'utf8')
  
  // set db for mongo shell command.
  let db = data.toString().trim();
  let data2 = fs.readFileSync('../config/setDB.js', 'utf8')
  let regex = /db = db.getSiblingDB\('.+/gm
  let result = data2.replace(regex, `db = db.getSiblingDB('${db}');`)

  console.log(result)
  fs.writeFileSync('../config/setDB.js', result, 'utf8',  (err) => {
    if (err) return console.log(err)
  })

  console.log("Done! the path is set.")
  process.exit()
})