var net = require('net')
//var date = require('date')
var strftime = require('strftime')
var server = net.createServer(function(socket){
	socket.end(strftime('%F %H:%M\n',new Date()))
})
server.listen(process.argv[2])