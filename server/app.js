const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use();
app.use();
app.use();

app.get('*', (req, res)=>{
  res.sendFile('index.html', {root: '../client'});
});

app.listen(3000, ()=>{
  console.log('Listening to port 3000');
});