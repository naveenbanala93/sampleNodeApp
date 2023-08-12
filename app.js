`use strict`

const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!, This Is A Sample Application.');
})

app.get('/welcome', (req, res) => {
  res.send('Hello World!, This Is Welcome Page.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
