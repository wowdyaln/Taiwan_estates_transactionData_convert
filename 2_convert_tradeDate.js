/*
this file excute two mongoDB operation 
*/
// * set database.
load('./config/setDB.js')
// some function
load('./lib/convert_date_f.js')

//===================================
// * 交易年月日 ，轉換
/*
get the value of "交易年月日" and convert it to 西元格式 ; add "tradeDate" filed.
*/

// ! excute
db[colName]
  .find()
  .forEach(document => addField_tradeYMD(document));