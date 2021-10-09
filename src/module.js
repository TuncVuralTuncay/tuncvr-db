const { fese,existsSync, fstat,writeFileSync,readFileSync } = require("fs")
const okuoglum = (file) => JSON.parse(readFileSync(file, 'utf-8'));
const yazkızım = (file, data) => writeFileSync(file, JSON.stringify(data, null, 4));
var verihata = "Lütfen bir veri belirt  -  Please specify a data"

class Database {
  constructor(x) {
      this.path = x || 'database.json'

      if (!this.path.startsWith('./')) this.path = "./" + this.path
      if (!this.path.endsWith(".json")) this.path = this.path + ".json"

      if (!existsSync(this.path)) {
        yazkızım(this.path, {})
      }
  }
help() {
fese.mkdir("Helpers", () => {
fese.open("Helpers.txt","")
})
}
move(quickDB) {
  quickDB.fetchAll().map((data) => {
  yazkızım(data.ID, data.data)
  })
}
set(veri,deger) {
if(!veri) throw new TypeError(verihata)
let dbd = okuoglum(this.path)
dbd[veri] = deger;
yazkızım(this.path, dbd)
}
has(veri) {
  if(!veri) throw new TypeError(verihata)
  let dbd = okuoglum(this.path)
  if(!dbd[veri]) return false;
  if(dbd[veri]) return true;
}
add(veri,deger) {
  if(!veri) throw new TypeError(verihata)
  if(!deger) throw new TypeError(`${veri} adlı veriye kaç sayı ekliyeceğim onu yazmalısın  - ${veri} how many numbers will i add, you have to do it`)
 let dbd = okuoglum(this.path)
  dbd[veri] += deger
  yazkızım(this.path, dbd)
}
fetch(veri) {
if(!veri) throw new TypeError(verihata) 
let dbd = okuoglum(this.path)
if(!dbd[veri]) throw new TypeError("Böyle bir veri bulunamadı  -  No such data found")
return dbd[veri]
}
get(veri) {
  if(!veri) throw new TypeError(verihata) 
 let  dbd = okuoglum(this.path)
  if(!dbd[veri]) throw new TypeError("Böyle bir veri bulunamadı  -  No such data found")
  return dbd[veri]
}
push(veri,deger) {
if(!veri) throw new TypeError(verihata)
let dbd = okuoglum(this.path)
if(Array.isArray(dbd[veri] === false)) throw new TypeError("Bu veri arrayl değil  -  This data not array")
dbd[veri].push(deger)
yazkızım(this.path, dbd)
}
delete(veri) {
if(!veri) throw new TypeError(verihata)
let dbd = okuoglum(this.path)
if(!dbd[veri]) throw new TypeError("Böyle bir veri yok  -  No such data found !")
delete dbd[veri]
yazkızım(this.path, dbd)
}
deleteAll() {
const reset = (files,data) => fese.writeFileSync({},null,2)
let dbd = this.path
reset(dbd)
}
subtract(veri,deger) {
if(!veri) throw new TypeError(verihata)
if(!deger) throw new TypeError(`${veri} adlı veriden kaç çıkaracağım  - How many will I subtract from the data named ${veri}`) 
let dbd = this.path
dbd[veri] -= deger
yazkızım(this.path, dbd)
}
fetchAll() {
  return okuoglum(this.path)
}
type(veri) {
  if (!veri) throw new TypeError(verihata)
  if(!data[veri]) return null
 let dbd = okuoglum(this.path)

  if(Array.isArray(this.get(veri))) return "array"
  if(typeof this.get(veri === "number")) return "number"
  if(typeof this.get(veri === "string")) return "string"
}
}
module.exports = Database