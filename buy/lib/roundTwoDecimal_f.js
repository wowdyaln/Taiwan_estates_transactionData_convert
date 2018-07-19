function roundTwoDecimal(doc) {
    //! javascript 奇怪的型別問題在此。必須 * 1 ，型別才會正確！
  let num = doc["建物移轉總面積(平方公尺)"] * 1 

  db[colName].update(
    { "_id": doc._id },
    {
      $set: {
        "建物移轉總面積(平方公尺)": Number(num.toFixed(2))
      }
    }
  );
}