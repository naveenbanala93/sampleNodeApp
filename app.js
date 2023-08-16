`use strict`

const express = require('express')
const app = express()
const port = 4000;


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!, This Is A Sample Application.');
})

app.get('/welcome', (req, res) => {
  res.send('Hello World!, This Is Welcome Page.');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
