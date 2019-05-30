var http = require('http')
var url = require('url')
var server = http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type': 'application/json' })
	let urlo = url.parse(req.url,true)
	if ( urlo.pathname == '/api/parsetime' ) {
		d = urlo.query.iso
		// TODO
	}
	if ( urlo.pathname == '/api/unixtime' ) {
		d = urlo.query.iso
		// TODO
	}
	console.log(urlo)
})
server.listen(process.argv[2])