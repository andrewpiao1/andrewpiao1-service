const express = require('express');
const app = express();
const PORT = 3000;
const Product = require('../database/models.js')


// app.use(express.static(__dirname + '/../client/public'))

app.get('/show', (req,res)=>{
  res.send('testing')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))