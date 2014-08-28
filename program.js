var net = require('net')
var port = process.argv[2]
var pad = function (str, desiredLength) {
	for (; str.length < desiredLength;) {
		str = '0' + str
	}
	return str
}
var getDatestr = function (dateobj) {
	var datestr = ''
	var year = pad(dateobj.getFullYear() + '', 2)
	var month = pad(dateobj.getMonth()+1 + '', 2)
	var day = pad(dateobj.getDate() + '', 2)
	return [year, month, day].join('-')
}
var getTimestr = function (dateobj) {
	var timestr = ''
	var hours = pad(dateobj.getHours() + '', 2)
	var minutes = pad(dateobj.getMinutes() + '', 2)
	return [hours, minutes].join(':')
}
net.createServer(function (socket) {
	var date = new Date()
	var timestr = getTimestr(date)
	var datestr = getDatestr(date)
	socket.end([datestr, timestr].join(' ').concat('\n'))
}).listen(port)
