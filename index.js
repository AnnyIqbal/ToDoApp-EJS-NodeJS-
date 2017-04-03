var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use(express.static(`__dirname/views`));

app.get('/', urlencodedParser, function(req, res) {
    res.render('./todo.ejs', {task: req.body.task});
});

app.post('/', urlencodedParser, function(req, res) {
    console.log(req.body.task);
    res.render('./todo.ejs', {task: req.body.task});
});

app.get('/favicon', function(req, res) {
    res.send('Favicon');
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});