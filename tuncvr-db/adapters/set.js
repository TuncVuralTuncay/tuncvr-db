const { error } = require("console")
const chalk = require("chalk")
const fs = require("fs")
var dosyaOku = (files) => JSON.parse(fs.readFileSync(files,'utf-8'))
var dosyaYaz = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,2))
try{
    dosyaOku("./database.json")
} catch {
    dosyaYaz("./database.json", {})
}
function set(veri,değer)  {
    const data = dosyaOku("./database.json")

    if(!veri) throw new TypeError(chalk.red("Lütfen Bir veri belirt örn: db.set(`tuncvr_${message.guild.id}`)"))
    data[veri] = değer
    dosyaYaz("./database.json",data)
}

module.exports = set