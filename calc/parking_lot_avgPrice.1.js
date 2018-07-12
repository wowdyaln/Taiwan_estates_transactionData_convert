// * set database.
load('../config/setDB.js')

load('../lib/parking_lot_avgPrice_f.js')

// 算出 "坡道機械" 的平均單價。

// ! excute
// * 得到一個車位平均價格
db[colName]
  .find({ "車位總價(元)": { $not: { $eq: 0 } }, "車位移轉總面積(平方公尺)": { $not: { $eq: 0 } }, "車位類別": "坡道機械" })
  .forEach(document => parking_lot_avgPrice(document));
  
print(`坡道機械 車位，平均價格： ${Math.floor(total_price/total_m2)} 元/平方公尺。`)

