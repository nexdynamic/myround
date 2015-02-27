
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(express.static(__dirname + '/myround-app/'));
app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/myround-app/index.html');
});


var port = 8081;

server.listen(process.env.PORT || port);
console.log('app listening at', port);
