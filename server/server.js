const express = require('express');

var app = express();

//app.get('/', (req, res) => {
//    res.status(200).send('Hello World');
//});

app.get('/', (req, res) => {
    res.send({
        error: 'Page not found',
        name: 'test'
    });
});

app.get('/users', (req,res) => {
    res.send([{
        name:'Mike',
        age:27
    }, {
        name:'Olgac',
        age: 32
    }, {
        name: 'Jane',
        age: 26
    }]);
});

app.listen(3000);
module.exports.app = app;