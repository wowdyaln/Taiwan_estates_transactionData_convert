const fs = require("fs")
let dir_path = require('./lib/dir_path.js', 'utf8')

let dbInfo = fs.readFileSync('../config/setDB.js', 'utf8')

process.stdout.write(`

===== MongoDB info : 
  
  ${dbInfo}


===== A folder path of source dataFiles to import data to MongoDB :

${dir_path}

  `)