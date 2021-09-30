const { error } = require("console")
const fs = require("fs")
var dosyaOku = (files) => JSON.parse(fs.readFileSync())
var dosyaYaz = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,2))

function set(veri,değer)  {

    if(!veri) new console(console.error("Lütfen Bir veri belirt örn: db.set(`tuncvr_${message.guild.id}`)"))
    data[veri] = değer
    dosyaYaz("./database.json",data)
}

module.exports = set