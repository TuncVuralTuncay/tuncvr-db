const fs = require("fs")
const dosyaOku  = (files) => JSON.parse(fs.readFileSync(files,'utf-8'))

function has(veri) {
    const data = dosyaOku("./database.json")

    if(!veri) throw new TypeError("Lütfen bir veri belirt")
   return data[veri] ? true : false
}
module.exports = has