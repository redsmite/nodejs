let express = require('express');
let app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.use('/img', express.static('img'));

app.get('/',function(req,res){
	res.render('index');
});

app.get('/contact',function(req,res){
	res.render('contact',{qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
	console.log(req.body);
	res.render('contact-success',{data: req.body});
});

app.get('/profile/:name', function(req, res){
	var data = {age: 17, job: 'shopkeeper', hobbies:['UMA research','singing','writing']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);