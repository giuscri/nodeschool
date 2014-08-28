var http = require('http')
var fs = require('fs')
var args = process.argv.slice(2)
var file = args[0]
var port = Number(args[1])
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	fs.createReadStream(file).pipe(res)
})
server.listen(port)
