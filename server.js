require('dotenv').load();
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var sass = require('node-sass');
var fs = require("fs");

var apiRoute = require('./app_api/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRoute);
sass.render({
  file: __dirname +'/app_client/scss/main.scss',
  outputStyle: 'compressed',
  outFile: __dirname +'/app_client/css/main.css'
}, function(error, result){
  if(!error){
    console.log(result);
    fs.writeFile(__dirname +'/app_client/css/main.css', result.css, function(err){
      if(err){
        console.log(err);
      } else {
        console.log("CSS WRITTEN");
      }
    });
  } else {
    console.log(error);
  }
});
app.use(express.static(path.join(__dirname, 'app_client')));

app.use(function(req, res, next){
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

app.listen(process.env.PORT || 3000);
console.log('Server on 3000');
