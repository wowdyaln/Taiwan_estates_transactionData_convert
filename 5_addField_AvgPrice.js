// * set database.
load('./config/setDB.js')
// some function
load('./lib/addField_AvgPrice_f.js')


// ! excute
db[colName]
.find({ "車位類別": "", "車位移轉總面積(平方公尺)": 0, "車位總價(元)": 0, "交易標的": { $not: { $eq: "土地" } } })
  .forEach(document => pricePyeong(document));
