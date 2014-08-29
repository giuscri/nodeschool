var http = require('http')
var url = require('url')
var port = process.argv[2]
var s = http.Server(function(request, response) {
	var urlObj = url.parse(request.url, true)
	var iso = urlObj.query['iso']
	var date = new Date(iso)
	var responseJSON = {}
	response.writeHead(200, {'Content-Type': 'application/json'})
	if (urlObj.pathname === '/api/parsetime') {
		responseJSON['hour'] = date.getHours()
		responseJSON['minute'] = date.getMinutes()
		responseJSON['second'] = date.getSeconds()
	}
	else if (urlObj.pathname){
		responseJSON['unixtime'] = date.getTime()
	}
	response.end(JSON.stringify(responseJSON))
})
s.listen(port)
console.log(['Server now listening on port', port, '...'].join(' '))
