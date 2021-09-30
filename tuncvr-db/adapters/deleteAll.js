const fs = require("fs")
const dosyaOku  = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var sıfırla = (files,data) => fs.writeFileSync(files,JSON.stringify({},null,2))

function deleteAll(){
const data = require("./database.json")

sıfırla("./database.json",data)
}
module.exports = deleteAll