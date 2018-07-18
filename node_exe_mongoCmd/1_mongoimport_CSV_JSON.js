const path = require("path")
const shell = require("child_process")
const rootDir = require('./lib/dir_path.js')
const database = require('./lib/database_name.js')
const filesPath = require('./lib/getAllFilePath.js')

let files = filesPath.getAllFilePath(rootDir)

//! excute mongo shell
// * import all CSV or JSON files to MongoDB
files.forEach(file => {
  if ( path.extname(file) === '.csv' ){
    let fileName = path.basename(file, '.csv') // 無副檔名
    shell.execSync(`mongoimport -d ${database} -c ${fileName} --type csv --file ${rootDir}/${file} --headerline`)
    
  } else if ( path.extname(file) === '.json' ) {
    let fileName = path.basename(file, '.json') // 無副檔名
    shell.execSync(`mongoimport -d ${database} -c ${fileName} --jsonArray < ${rootDir}/${file}`)

  } else if (path.extname(file) !== '.csv' || path.extname(file) !== '.json'){
    console.log(`
    
    wrong file format:  ${file}

    Make sure that it is CSV or JSON.
    
    `);
    return 
  }
})
