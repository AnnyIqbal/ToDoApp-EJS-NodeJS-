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
    res.render('./todo.ejs', {list: " "});
});

app.post('/', urlencodedParser, function(req, res) {
    todoList.push(req.body.task);
    res.render('./todo.ejs', {list: todoList});
});

app.get('/favicon', function(req, res) {
    res.send('Favicon');
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

// console.log('...', x.parentElement.innerHTML.split('<')[0]);
