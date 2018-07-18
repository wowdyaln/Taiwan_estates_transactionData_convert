// * 買賣沒有轉移車位，純粹只有建物
// {"車位類別":"","車位移轉總面積(平方公尺)":0,"車位總價(元)":0, "交易標的": {$not: {$eq: "土地"}}}

// 抓取 "單價(元/平方公尺)" 做計算
function pricePyeong(doc) {
  let avgM2 = doc["單價(元/平方公尺)"]
  let avgPyeong = Math.floor(avgM2 / 0.3025)
  print(avgPyeong)

  db[colName].update(
    { "_id": doc._id },
    {
      $set: {
        "單價(元/坪)": avgPyeong
      }
    }
  );
}

// * 轉移車位 and 建物
// { "車位類別": { $not: { $eq: "" } }, "車位移轉總面積(平方公尺)": { $not: { $eq: 0 } }, "車位總價(元)": { $not: { $eq: 0 } }, "交易標的": { $not: { $eq: "車位" } } }
function pricePyeong_withParkingLot(doc) {
  // (總價 - 車位價) / ( 建物移轉總面積(平方公尺) - 車位移轉總面積(平方公尺) )
  let totolPrice = doc["總價(元)"]
  let carPrice = doc["車位總價(元)"]
  let totolM2 = doc["建物移轉總面積(平方公尺)"]
  let carM2 = doc["車位移轉總面積(平方公尺)"]

  let avgPyeong_withCar = Math.floor((totolPrice - carPrice) / (totolM2 - carM2) / 0.3025)
  print(avgPyeong_withCar)

  db[colName].update(
    { "_id": doc._id },
    {
      $set: {
        "單價(元/坪)(已扣除車位)": avgPyeong_withCar
      }
    }
  );
}
