var http = require('http')
var fs = require('fs')
let raw = ''
var server = http.createServer(function (req, res) {
	var readable = fs.createReadStream(process.argv[3])
	readable.on('data',function(data){
		raw += data.toString()
	})
	readable.on('end',function(){
		res.end(raw)
	})
// request handling logic...
})
server.listen(process.argv[2])