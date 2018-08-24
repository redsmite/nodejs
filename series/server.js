var http = require('http');
var port = 3000;

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Ririko best girl');
});

server.listen(port, '127.0.0.1');
console.log('Ririko is best girl!!, Port '+port);