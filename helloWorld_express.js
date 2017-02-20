// micro web server framework 
var express = require('express');

// 
var app = express();

// 
app.get('/', function(req, res){
    res.send('Hello World');
});

// start web server on port 1337
app.listen(1337);

// start listening for request
console.log('Server running at 127.0.0.1:1337');
