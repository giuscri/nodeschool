var http = require('http')
var urls = process.argv.slice(2)
http.get(urls[0], function (response) {
	var collection = []
	response.setEncoding('utf8')
	response.on('data', function (data) {
		collection.push(data)
	})
	response.on('error', function (err) {
		throw err
	})
	response.on('end', function () {
		console.log(collection.join(''))
		http.get(urls[1], function (response) {
			var collection = []
			response.setEncoding('utf8')
			response.on('data', function (data) {
				collection.push(data)
			})
			response.on('error', function (err) {
				throw err
			})
			response.on('end', function () {
				console.log(collection.join(''))
				http.get(urls[2], function (response) {
					var collection = []
					response.setEncoding('utf8')
					response.on('data', function (data) {
						collection.push(data)
					})
					response.on('error', function (err) {
						throw err
					})
					response.on('end', function () {
						console.log(collection.join(''))
					})
				})
			})
		})
	})
})
