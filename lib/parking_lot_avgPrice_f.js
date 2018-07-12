
/*
 todo 算出 "坡道平面" / "坡道機械"" / "升降機械" / "升降平面" 的平均單價。
* {"車位總價(元)": {$not: {$eq: 0}}, "車位移轉總面積(平方公尺)":{$not: {$eq: 0}}, 車位類別: "坡道機械" }


*/
let total_price = 0
let total_m2 = 0
let avgPrice = 0

function parking_lot_avgPrice(doc) {
  let price = doc["車位總價(元)"]
  let m2 = doc["車位移轉總面積(平方公尺)"]
  print(m2, price)
  total_price += price
  total_m2 += m2
}


