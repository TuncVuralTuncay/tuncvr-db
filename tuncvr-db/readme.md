### Tuncvr db yeni nesil database modülü !

# Nasıl yüklenir
```npm
npm install tuncvr-db
```
# Güncelleme notları
db.add eklendi db.delete eklendi db.deleteAll() eklendi db.fetch eklendi db.get eklendi db.has eklendi db.push eklendi db.subtract eklendi tüm hatalar düzeltildi 

# Nasıl kurulur
```js
const {db,database} = require("tuncvr-db")//Modülü tanımlamassak hiçbirşey çalışmaz
```
# Nasıl kullanılır ?
```js
db.set("tuncvr",1)// databaseye bir veri eklersiniz
db.add("tuncvr",+1)// tuncvr adlı değere 1 eklersiniz
db.push("tuncvr","demir-kılıç")//tuncvr adlı listeye demir-kılıç yazsını ekler
db.get("tuncvr")//databaseden veri çekersiniz
db.fetch("tuncvr")//databaseden veri çekmenin başka yoludur
db.subtract("tuncvr",+1)//tuncvr adlı değere 1 eklersiniz db.add ile aynı görevi görür
db.delete("tuncvr")//databaseden veri silersiniz
db.deleteAll()//Databasenin tamamı temizlenir
db.has("tuncvr")//verinin var olup olmadığına bakarsınız
```