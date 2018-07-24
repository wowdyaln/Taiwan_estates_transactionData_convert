// * export all collections (MongoDB). 3_mongoexport_CSV.js
const fs = require('fs')
const path = require("path")
const shell = require("child_process")
const rootDir = require('./lib/dir_path.js')
const db = require('./lib/database_name')
const filesPath = require('./lib/getAllFilePath.js')

let files = filesPath.getAllFilePath(rootDir)


//! excute mongo shell
// * run 'mongo file.js'

files.forEach(file => {
  // create a new folder named 'csv for googleMap'
  if (!fs.existsSync(rootDir +"/csv_for_googleMap")) {
    fs.mkdirSync(rootDir + "/csv_for_googleMap")
    // 如果沒有 'csv for googleMap' 資料夾，就建立一個。
  }
  // create a new folder named 'land'
  if (!fs.existsSync(rootDir + "/csv_for_googleMap/onlyLand")) {
    fs.mkdirSync(rootDir + "/csv_for_googleMap/onlyLand")
    // 如果沒有 '/csv_for_googleMap/onlyLand' 資料夾，就建立一個。
  }

  if (path.extname(file) === '.csv') {
    let fileName = path.basename(file, '.csv') // 無副檔名
    let exportTo = `${rootDir}/csv_for_googleMap/${fileName}.csv`
    let exportTo2 = `${rootDir}/csv_for_googleMap/onlyLand/${fileName}_land.csv`
    // create a csv file.
    fs.writeFileSync(`${exportTo}`, "", 'utf8')
    console.log(`${exportTo} has created.`)

    // mongoexport to this csv file. // filter: --query '{"address":{$exists:true}}'
    shell.execSync(`mongoexport -d ${db} -c ${fileName} --type=csv --out ${exportTo} --query '{"address":{$exists:true}}' --fields "交易標的,土地區段位置/建物區段門牌,都市土地使用分區,交易筆棟數,移轉層次,總樓層數,建物型態,主要用途,主要建材,建物移轉總面積(平方公尺),建物現況格局-房,建物現況格局-廳,建物現況格局-衛,建物現況格局-隔間,有無管理組織,總價(元),車位類別,車位移轉總面積(平方公尺),車位總價(元),備註,address,tradeDate.year,tradeDate.month,tradeDate.day,build_CompletionDate.year,build_CompletionDate.month,build_CompletionDate.day,單價(元/坪)(已扣除車位),建物移轉總面積(坪/扣車位面積),土地移轉總面積(坪),車位移轉總面積(坪)"`)
    
    // mongoexport to this csv file. // filter: --query '{"交易標的":"土地"}'
    shell.execSync(`mongoexport -d ${db} -c ${fileName} --type=csv --out ${exportTo2} --query '{"交易標的":"土地"}' --fields "交易標的,土地區段位置/建物區段門牌,土地移轉總面積(平方公尺),土地移轉總面積(坪),都市土地使用分區,交易筆棟數,總價(元),單價(元/平方公尺),備註,tradeDate.year,tradeDate.month,tradeDate.day"`)
    console.log(`collection: ${fileName} has been exported as ${fileName}.csv`);

  } else if ( path.extname(file) !== '.csv' ) {
    console.log(`
    
    wrong file format:  ${file}

    Make sure that it is CSV or JSON.
    
    `);
    return
  }
})