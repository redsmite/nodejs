var http = require('http');
var fs = require('fs');
var port = 3000;

// Server

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type': 'application/json'});
	var myObj = {
		name: 'Ririko',
		job: 'best girl',
		age: '17'
	};
	res.end(JSON.stringify(myObj));
});

server.listen(port, '127.0.0.1');
console.log('Ririko is best girl!!, Port '+port);