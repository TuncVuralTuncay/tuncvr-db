const fs = require("fs")
const dosyaOku = (files) => JSON.parse(fs.readFileSync(files,'utf-8'))
const dosyaYaz = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,2))

function add(veri,değer) {
    const data = require("./database.json")

    if(!data) throw new TypeError("Lütfen bir veri belirt")
    if(typeof değer != 'number') throw new TypeError("Bir sayı belirtmen gerek harf değil")
    if(data[veri] === undefined) throw new TypeError("Böyle birşey bulunmadı")
    data[veri] += değer
    dosyaYaz("./database.json",data)
}
module.exports = subtract