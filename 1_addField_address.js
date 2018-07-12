// * set database.
load('./config/setDB.js')
// 
load('./lib/addField_address_f.js')

//土地區段位置/建物區段門牌 ，範圍 A~B號 ，取A 刪除B。   增加 field: address
// if {"交易標的":{$not: {$eq: "土地"}}} ,convert.

// ! excute
db[colName]
  .find({ "交易標的": { $not: { $eq: "土地" } } })
  .forEach(document => addField_address(document));
