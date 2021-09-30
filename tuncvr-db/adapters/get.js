const fs = require("fs")
const dosyaOku = (files) => JSON.parse(fs.readFileSync(files,'utf-8'))


function get(veri) {
    const data = dosyaOku("./database.json")
    if(!veri) throw new TypeError("Bir veri belirt")
    if(veri === undefined) throw new TypeError("Böyle bir veri bulunamadı")
    return data[veri] ? data[veri] : null
}
module.exports = get