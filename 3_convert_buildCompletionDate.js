/*
this file excute two mongoDB operation 
*/
// * set database.
// load('./config/setDB.js')
// some function
load('./lib/convert_date_f.js')

//===================================
// * 建築完成年月，轉換
/*
get the value of "建築完成年月" and convert it to 西元格式 ; add "build_CompletionDate" filed.
*/
// ! excute
db[colName]
  .find({ "建築完成年月": { $not: { $eq: "" } } })
  .forEach(document => addField_build_completionYMD(document));

