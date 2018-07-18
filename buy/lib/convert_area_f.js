function convert_area(doc) {
  let buildPyeong = (doc["建物移轉總面積(平方公尺)"] - doc["車位移轉總面積(平方公尺)"]) * 0.3025
  let landPyeong = doc["土地移轉總面積(平方公尺)"] * 0.3025
  let parkingPyeong = doc["車位移轉總面積(平方公尺)"] * 0.3025
  print(buildPyeong, landPyeong, parkingPyeong)

  db[colName].update(
    { "_id": doc._id },
    {
      $set: {
        "建物移轉總面積(坪/扣車位面積)": Number(buildPyeong.toFixed(3)),
        "土地移轉總面積(坪)": Number(landPyeong.toFixed(3)),
        "車位移轉總面積(坪)": Number(parkingPyeong.toFixed(3))
      }
    }
  );
}