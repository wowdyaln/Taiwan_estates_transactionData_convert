// * set database.
// load('./config/setDB.js')

load('./lib/convert_area_f.js')


// ! excute
db[colName]
  .find()
  .forEach(document => convert_area(document));

