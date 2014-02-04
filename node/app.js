var express = require('express');
var app = express();

app.post('/', function(req, res) {
    res.send('game done	')
});
app.get('/', function(req, res) {
    res.send('game done	')
});

app.listen(8000);
