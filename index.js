var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/json parser 
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

let todoList = [];

app.set('view engine', 'ejs');

app.use(express.static(`__dirname/views`));

app.get('/', urlencodedParser, function(req, res) {
    res.render('./todo.ejs', {list: 0});
});

app.post('/', urlencodedParser, function(req, res) {
    todoList.push(req.body.task);
    res.render('./todo.ejs', {list: todoList});
});

app.post('/dlt/:id', function(req, res) {
    let index = req.url.split(':')[1];
    todoList.splice(index, 1);
    res.render('./todo.ejs', {list: todoList});
});

app.get('*', function(req, res) {
    res.send('404');
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});
