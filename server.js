var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'content-type':'test/plain'});
	res.end('Hello world!');
	console.log('Server running on 8128');
}).listen(8128);
