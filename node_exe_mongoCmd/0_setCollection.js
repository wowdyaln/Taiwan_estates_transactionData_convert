const fs = require("fs")

let dbInfo = fs.readFileSync('../config/setDB.js', 'utf8')

process.stdout.write(`

  MongoDB info : 
  
  ${dbInfo}

  To select a MongoDB database.
  input the name of collection （ e.g.  score  ）
  and press 'Enter'.

  >> >>`)

let data = process.argv[2]
  
let colName = data.toString().trim();
let data2 = fs.readFileSync('../config/setDB.js', 'utf8')
let regex = /let colName = ".+/gm
let result = data2.replace(regex, `let colName = "${colName}"`)

// console.log(result)
fs.writeFileSync('../config/setDB.js', result, 'utf8', (err) => {
  if (err) return console.log(err)
})

console.log(`Done! the collection '${colName}' is set.`)
process.exit()


// node 0_setCollection.js [nameOfCol]