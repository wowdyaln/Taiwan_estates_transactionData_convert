function roundTwoDecimal(doc) {
  let num = doc["車位移轉總面積(平方公尺)"] * 0.3025

  db[colName].update(
    { "_id": doc._id },
    {
      $set: {
        "建物移轉總面積(平方公尺)": Number(num.toFixed(2)),
      }
    }
  );
}