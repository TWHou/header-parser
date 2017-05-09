var express = require("express");
var path = require("path");
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/api/whoami', function (req, res) {
  var ip = req.ip.split(":").pop();
  var os = req.headers['user-agent'].match(/[^\(]+(?=\))/)[0];
  var lang = req.headers['accept-language'].split(",")[0];
  var output = { ip: ip, language: lang, software: os };
  res.json(output);
});
app.listen(process.env.PORT || 8080, function () {
  console.log('Node.js listening on port ' + process.env.PORT);
});