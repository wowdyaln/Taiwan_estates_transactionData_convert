// * set database.
load('../config/setDB.js')


// * 建物移轉總面積(平方公尺) roundTwoDecimal
load('../buy/lib/roundTwoDecimal_f.js')
// ! excute
db[colName]
  .find()
  .forEach(document => roundTwoDecimal(document));

  
// * 土地區段位置/建物區段門牌 ，範圍 A~B號 ，取A 刪除B。   增加 field: address
// if {"交易標的":{$not: {$eq: "土地"}}} ,convert.
load('../buy/lib/addField_address_f.js')

// ! excute
db[colName]
  .find({ "交易標的": { $not: { $eq: "土地" } } })
  .forEach(document => addField_address(document));


//===================================
load('../buy/lib/convert_date_f.js')
// * 交易年月日 ，轉換
/*
get the value of "交易年月日" and convert it to 西元格式 ; add "tradeDate" field.
*/

// ! excute
db[colName]
  .find()
  .forEach(document => addField_tradeYMD(document));


//===================================
load('../buy/lib/convert_date_f.js')
// * 建築完成年月，轉換
/*
get the value of "建築完成年月" and convert it to 西元格式 ; add "build_CompletionDate" field.
*/
// ! excute
db[colName]
  .find({ "建築完成年月": { $not: { $eq: "" } } })
  .forEach(document => addField_build_completionYMD(document));

//===========
load('../buy/lib/addField_AvgPrice_f.js')


// ! excute
db[colName]
  .find({ "車位類別": { $not: { $eq: "" } }, "車位移轉總面積(平方公尺)": { $not: { $eq: 0 } }, "車位總價(元)": { $not: { $eq: 0 } }, "交易標的": { $not: { $eq: "車位" } } })
  .forEach(document => pricePyeong_withParkingLot(document));

//=============
load('../buy/lib/addField_AvgPrice_f.js')


// ! excute
db[colName]
  .find({ "車位類別": "", "車位移轉總面積(平方公尺)": 0, "車位總價(元)": 0, "交易標的": { $not: { $eq: "土地" } } })
  .forEach(document => pricePyeong(document));

//================
load('../buy/lib/convert_area_f.js')


// ! excute
db[colName]
  .find()
  .forEach(document => convert_area(document));
