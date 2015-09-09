var express = require('express');
var messages = require('./message-list.js');
var bodyParser = require('body-parser') 

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Max-Age", 10);
  next();
});

app.use(bodyParser.json())

app.get('/classes/messages', function(req, res, next) {
  var callback = function(data){
    res.send(JSON.stringify({ results: data}));
  }
  messages.getRecentMessages(callback);
});

app.post('/classes/messages', function(req, res, next) {
   messages.addMessage(req.body); 
});

app.listen(3000);
console.log("Server started on http://localhost:3000")