var http = require('http');
var fs = require('fs');
var port = 3000;

// Stream
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
// 	var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// 	// myReadStream.on('data', function(chunk){
// 	// 	console.log('new chunk received');
// 	// 	myWriteStream.write(chunk);
// 	// });

// 	myReadStream.pipe(myWriteStream);


// Server

var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');

	myReadStream.pipe(res);
});

server.listen(port, '127.0.0.1');
console.log('Ririko is best girl!!, Port '+port);