const fs = require("fs")
const dosyaOku = (files) => JSON.parse(fs.readFileSync(files,'utf-8'))
const dosyaSil = (files) => fs.writeFileSync(JSON.stringify(files,null,2))
function sil (veri) {
    const data = dosyaOku("./database.json")

    if(!veri) throw new TypeError("Bir veri belirt")
    if(veri === undefined) throw new TypeError("Böyle bir veri bulunamadı")
    delete data[veri]
    dosyaSil("./database.json",data)
}
module.exports = sil