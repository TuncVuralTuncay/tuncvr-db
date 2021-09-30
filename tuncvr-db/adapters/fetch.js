const fs = require("fs")
const dosyaOku = (files) => JSON.parse(fs.readFileSync(files,'utf-8'))

function fetch(veri) {
const data = dosyaOku("./database.json")

    if(!data) throw new TypeError("Bir veri belirt")
    if(data[veri] === undefined) throw new TypeError("Böyle bir veri yok")
     return data[veri] ? data[veri] : null
}
module.exports = fetch