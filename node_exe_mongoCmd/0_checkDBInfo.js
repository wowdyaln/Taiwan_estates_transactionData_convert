const fs = require("fs")

let dbInfo = fs.readFileSync('../config/setDB.js', 'utf8')

process.stdout.write(`

  MongoDB info : 
  
  ${dbInfo}

  `)