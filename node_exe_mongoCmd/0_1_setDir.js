const fs = require("fs")
const dirPath = require("./lib/dir_path.js")
const database = require("./lib/database_name.js")

process.stdout.write(`
  dirPath : ${dirPath}

  MongoDB database : ${database}

  To set a folder path of source dataFiles to import data to MongoDB.
  input the path （ e.g.  /User/dirA/dirB/dirC  ）
  and press 'Enter'.

  >> >>
`)

process.stdin.on("data", function (data) {
  let rootDir = 
  `
  const dirname = '${data.toString().trim()}'; 
  module.exports = dirname;
  `
    
  fs.writeFileSync('./lib/dir_path.js', rootDir + "\n\n\n", 'utf8')

  console.log("Done! the path is set.")
  process.exit()
})

// * node 0_setDir.js
