# Tuncvr-db Database Modülü  -  Tuncvr-db Database Module


Nasıl indirilir ? -  How to install ?
```npm
npm install tuncvr-db --save
```

```js
db.set("tuncvr",1)// databaseye bir veri eklersiniz   -  you add a data to the database
db.add("tuncvr",+1)// tuncvr adlı değere 1 eklersiniz  -  you add 1 to the value named tuncvr
db.push("tuncvr","demir-kılıç")//tuncvr adlı listeye demir-kılıç yazsını ekler  -  adds iron-sword text to the list named tuncvr
db.get("tuncvr")//databaseden veri çekersiniz  -  you get data from database
db.fetch("tuncvr")//databaseden veri çekmenin başka yoludur  -  Another way to pull data from database
db.subtract("tuncvr",1)//tuncvr adlı değerden  1 çıkarırsınız  -  you subtract 1 from the value named tuncvr
db.delete("tuncvr")//databaseden veri silersiniz  -  you delete data from database
db.deleteAll()//Databasenin tamamı temizlenir  -  The entire database is cleared
db.has("tuncvr")//verinin var olup olmadığına bakarsınız  -  check if data exists
db.type("tuncvr")//veri tipini öğrenirsiniz  -  you learn the data type 
db.move()//quick.db den veri taşırsınız  -  You migrate data from quick.db
```