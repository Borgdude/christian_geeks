require('dotenv').load();
var express = require('express');
var app = express();
var path = require('path');

var apiRoute = require('./app_api/routes/index');

app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, 'app_client')));

app.use(function(req, res, next){
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

app.listen(3000);
console.log('Server on 3000');
