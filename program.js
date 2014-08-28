var http = require('http')
var from = process.argv[2]
http.get(from, function (response) {
	var collection = []
	response.setEncoding('utf8')
	response.on('data', function (data) {
		// From L.A. to Tokyo, I'm so fancy!!
		collection.push(data)
	})
	response.on('error', function (err) {
		throw err
	})
	response.on('end', function () {
		collection = collection.join('')
		console.log(collection.length)
		console.log(collection)
	})
})
