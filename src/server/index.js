var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('src/client/views'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});

app.get('/test', function (req, res) {
    res.send('/test', function (req, res) {
        res.send(mockAPIResponse);
    })
})