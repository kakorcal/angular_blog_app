const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/assets', express.static(`${__dirname}/../client/assets`));
app.use('/views', express.static(`${__dirname}/../client/views`));
app.use('/stylesheets', express.static(`${__dirname}/../client/stylesheets`));
app.use('/javascripts', express.static(`${__dirname}/../client/javascripts`));
app.use('/api/blogs', routes.blogs);

app.get('*', (req, res)=>{
  res.sendFile('/views/layout.html', {root: './client'});
});

app.listen(3000, ()=>{
  console.log('Listening to port 3000');
});