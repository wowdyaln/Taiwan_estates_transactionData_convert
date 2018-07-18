// * get _id
function getID(doc) {
  return doc._id
}

//* rocToAD(number) -> { year, month, day }
function rocToAD(roc) {

  let date = roc.toString()
  if (date.length === 6) {
    let y = date.slice(0, 2)
    let year = Number(y) + 1911;
    let month = Number(date.slice(2, 4))
    let day = Number(date.slice(4, 6))

    let d = {
      year: year,
      month: month,
      day: day
    }
    // print(typeof d.day)
    return d

  } else if (date.length === 7) {
    let y = date.slice(0, 3)
    let year = Number(y) + 1911;
    let month = Number(date.slice(3, 5))
    let day = Number(date.slice(5, 7))
    // print(`${year} / ${month} / ${day}`)
    let d = {
      year: year,
      month: month,
      day: day
    }
    // print(typeof d.day)
    return d
  } else {
    print("error!!!")
  }
}


// * 交易年月日
function addField_tradeYMD(doc) {
  let data_Id = getID(doc)
  let date = rocToAD(doc["交易年月日"])
  printjson(date)

  db[colName].update(
    { "_id": data_Id }, // value 要是 ObjectId("XxxxXXxxxxx")，不能只是傳入 id string.
    {
      $set: {
        "tradeDate": date
      }
    }
  );
}

// * 建築完成年月
function addField_build_completionYMD(doc) {
  let data_Id = getID(doc)
  let date = rocToAD(doc["建築完成年月"])
  printjson(date)

  db[colName].update(
    { "_id": data_Id }, // value 要是 ObjectId("XxxxXXxxxxx")，不能只是傳入 id string.
    {
      $set: {
        "build_CompletionDate": date
      }
    }
  );
}
