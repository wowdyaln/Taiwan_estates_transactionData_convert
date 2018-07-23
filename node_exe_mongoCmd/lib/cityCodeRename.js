module.exports = {

  cityCodeToCityName:
    function cityCodeToCityName(fileName) {
      let firstLetter = fileName[0]
      switch (firstLetter) {
        case 'C':
          return "Keelung"
        case 'F':
          return "NewTaipei"
        case 'A':
          return "Taipei"
        case 'G':
          return "Yilan"
        case 'H':
          return "Taoyuan"
        case 'J':
          return "Hsinchu"
        case 'O':
          return "HsinchuCity"
        case 'K':
          return "Miaoli"
        case 'B':
          return "Taichung"
        case 'O':
          return "HsinchuCity"
        case 'N':
          return "Changhua"
        case 'M':
          return "Nantou"
        case 'P':
          return "Yunlin"
        case 'Q':
          return "Chiayi"
        case 'I':
          return "ChiayiCity"
        case 'D':
          return "Tainan"
        case 'S':
          return "Kaohsiung"
        case 'E':
          return "KaohsiungCity"
        case 'T':
          return "Pingtung"
        case 'V':
          return "Taitung"
        case 'U':
          return "Hualien"
        case 'X':
          return "Penghu"
        case 'W':
          return "Kinmen"
        case 'Z':
          return "Lienchiang"

        default:
          return fileName
      }
    }  
}

/*
臺北Taipei - A
臺中Taichung - B
基隆Keelung(省轄市) - C
臺南Tainan - D
高雄KaohsiungCity - E
新北市NewTaipei  - F
宜蘭Yilan - G
桃園Taoyuan - H
嘉義ChiayiCity市 - I
新竹Hsinchu - J
苗栗Miaoli - K
L
南投Nantou - M
彰化Changhua - N
新竹市HsinchuCity - O
雲林Yunlin - P
嘉義Chiayi - Q
R
高雄Kaohsiung - S
屏東Pingtung - T
花蓮Hualien - U
臺東Taitung - V
金門Kinmen - W
澎湖Penghu - X
Y
連江Lienchiang  - Z
*/