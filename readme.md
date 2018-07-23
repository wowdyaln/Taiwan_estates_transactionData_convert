##### Import csv / json files to MongoDB. Convert data via MongoDB with mongo shell commands and export to csv files.

0. download RAW data here : [內政部不動產交易實價查詢](http://plvr.land.moi.gov.tw/DownloadOpenData)
( only 不動產買賣 can be converted, new feature is in the future, select 'csv' format.)
Create a folder to store `csv` files. File name will be a name of collection later, just rename these files if you don't like them.

1. Set the path of folder you just created on step0.

    - `node 0_1_setDir.js` 
    ( path:  node_exe_mongoCmd/0_1_setDir.js )
  
2. configure database 
    - `node 0_setDatabase.js` 
    input a name for dbName that you want to create.



3. import files to MongoDB.
    - `node 1_mongoimport_CSV_JSON.js`
    After executing, check your MongoDB, all files will be imported.



4. convert all collections
    - `node 2_1_mongoCollections_convert.js`
    After executing, check your MongoDB, there will be some new fields in every document.

5. export all collections to csv files. ( a csv file each collection.)  A new folder will be created named "csv_for_googleMap" under under your RAW data folder.
    - `node 3_mongoexport_CSV.js`