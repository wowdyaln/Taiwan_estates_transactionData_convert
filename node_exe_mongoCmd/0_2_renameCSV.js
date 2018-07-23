const fs = require("fs")
const path = require("path")
const shell = require("child_process")
const rootDir = require('./lib/dir_path.js')
const filesPath = require('./lib/getAllFilePath.js')
const rename = require('./lib/cityCodeRename.js')

let files = filesPath.getAllFilePath(rootDir)
let date = rootDir.split(path.sep).pop()
let allow = /^[A-K]|^[M-Q]|^[S-X]|^Z/ // 行政區代號
let notAllow = /BUILD|LAND.+_LAND|PARK|SCHEMA|MANIFEST/
let doNothing = /^\d/

//! excute node
//* create 'precell' and 'rent' folders.
fs.mkdirSync(rootDir + "/precell")
fs.mkdirSync(rootDir + "/rent")

files.forEach(file => {

  if (allow.test(file) && !notAllow.test(file)){
    // * rename.
    let cityName = rename.cityCodeToCityName(file) 
    let purposeCode = file[file.length-5]

    if (purposeCode === "A") {
      fs.renameSync(`${rootDir}/${file}`, `${rootDir}/${date}${cityName}_buy.csv`)
      console.log(`rename ${file} as ${date}${cityName}_buy.csv`);
    } else if ( purposeCode === "B") {
      fs.renameSync(`${rootDir}/${file}`, `${rootDir}/precell/${date}${cityName}_percell.csv`)
      console.log(`rename ${file} as ${date}${cityName}_percell.csv`);
    } else if ( purposeCode === "C") {
      fs.renameSync(`${rootDir}/${file}`, `${rootDir}/rent/${date}${cityName}_rent.csv`)
      console.log(`rename ${file} as ${date}${cityName}_rent.csv`);
    }

  } else if (doNothing.test(file[0])) {
    return
  } else if ( notAllow.test(file) ){
    //! delete file.
    fs.unlinkSync(`${rootDir}/${file}`)
    console.log(`Remove ${rootDir}/${file}`);
  } 
  else {
    //! delete file.
    fs.unlinkSync(`${rootDir}/${file}`)
    console.log(`Remove ${rootDir}/${file}`);
  } 
})
