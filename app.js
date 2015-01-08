
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(express.static(__dirname + '/app/myround'));
app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/myRound/index.html');
});



server.listen(process.env.PORT || 8081);