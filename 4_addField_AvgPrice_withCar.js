// * set database.
load('./config/setDB.js')
// some function
load('./lib/addField_AvgPrice_f.js')


// ! excute
db[colName]
  .find({ "車位類別": { $not: { $eq: "" } }, "車位移轉總面積(平方公尺)": { $not: { $eq: 0 } }, "車位總價(元)": { $not: { $eq: 0 } }, "交易標的": { $not: { $eq: "車位" } } })
  .forEach(document => pricePyeong_withParkingLot(document));

