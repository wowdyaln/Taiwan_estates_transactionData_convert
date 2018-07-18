// * set database.
load('../config/setDB.js')


// $unset to remove field(s)
function removeField(){
  db[colName].update(
    { tradeDate: { $exists: true } },
    { $unset: { tradeDate: "" } }
  )
}

db[colName].find().forEach(document => removeField());