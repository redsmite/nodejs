const http = require('http');

const server = http.createServer(function(request, response){
	console.log('got a request');
	response.write('hi');
	response.end();
});

server.listen(3002);