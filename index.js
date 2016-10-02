var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cats = require('./routes/cat')(app);

app.get('/', function(req, res) {
    // res.send('Hello World!');
    res.json({hello: 'guys'});
});

var server = app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000/');
});

/* basic setup
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(8008, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8008/');
*/
