var express = require('express')
, fs = require('fs')
, path = require('path');


var app = express.createServer(express.logger());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  var buffer = fs.readFileSync("index.html")
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});