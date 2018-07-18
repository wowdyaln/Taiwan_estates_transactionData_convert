// * set database.
load('../config/setDB.js')

cols = db.getCollectionNames();

// Iterate through each collection.
cols.forEach(function (col) {
  // Do something with each collection.
  print(col);
});