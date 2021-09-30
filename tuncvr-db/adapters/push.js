const fs = require("fs")
const dosyaOku = (files) =>  JSON.parse(fs.readFileSync(files,'utf-8'))
const dosyaYaz = (files) => fs.writeFileSync(JSON.stringify(files,null,2))

function push(veri,değer) {
    const data = dosyaOku("./database.json")

    if(Array.isArray(data[veri]) === false) throw new TypeError("Bu veri aray değil")
    data[veri].push(değer)
    dosyaYaz("./database.json",data)
}
module.exports = push