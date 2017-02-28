var express = require('express');
var opn = require('opn');
var app = express();

app.listen(9090);
console.log("App listening on port 9090");

app.use('/bower_components', express.static('bower_components'));
app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

opn('http://localhost:9090')