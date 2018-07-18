// * convert all collections (MongoDB). excute 2_0_convert_AllField.js

const path = require("path")
const shell = require("child_process")
const rootDir = require('./lib/dir_path.js')
const filesPath = require('./lib/getAllFilePath.js')

let files = filesPath.getAllFilePath(rootDir)

//! excute mongo shell
// * run 'mongo file.js'

files.forEach(file => {
  if ( path.extname(file) === '.csv' ){
    let fileName = path.basename(file, '.csv') // 無副檔名
    shell.execSync(`node 0_setCollection.js ${fileName}`)
    shell.execSync(`mongo 2_0_convert_AllField.js`)
    console.log(`collection: ${fileName}.  All fields are converted.`);

  } else if (path.extname(file) === '.json') {
    let fileName = path.basename(file, '.json') // 無副檔名
    shell.execSync(`node 0_setCollection.js ${fileName}`)
    shell.execSync(`mongo 2_0_convert_AllField.js`)
    console.log(`collection: ${fileName}.  All fields are converted.`);

  } else if (path.extname(file) !== '.csv' || path.extname(file) !== '.json') {
    console.log(`
    
    wrong file format:  ${file}

    Make sure that it is CSV or JSON.
    
    `);
    return 
  }
})