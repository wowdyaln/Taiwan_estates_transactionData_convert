const fs = require("fs")

module.exports = {
  
  getAllFilePath:
    function getAllFilePath(dirPath) {
      let paths = fs.readdirSync(dirPath)
                    .filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)) // 忽略隱藏檔
      return paths
    }
}