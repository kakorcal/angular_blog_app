const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use();
app.use();
app.use();
app.use('/api', routes.blogs);

app.get('*', (req, res)=>{
  res.sendFile('index.html', {root: '../client'});
});

app.listen(3000, ()=>{
  console.log('Listening to port 3000');
});