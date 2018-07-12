//土地區段位置/建物區段門牌 ，範圍 A~B號 ，取A 刪除B。   增加 field: address
// * if {"交易標的":{$not: {$eq: "土地"}}} ,convert.

function addField_address(doc) {
  let add = doc["土地區段位置/建物區段門牌"]
  let newadd = add.replace(/~\d+/gm, "")  // 範圍 A~B號 ，取A 刪除B。
  print(newadd)

  db[colName].update(
    { "_id": doc._id }, // value 要是 ObjectId("XxxxXXxxxxx")，不能只是傳入 id string.
    {
      $set: {
        "address": newadd
      }
    }
  );
}