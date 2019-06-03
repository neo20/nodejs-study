var http = require('http')
var server = http.createServer(function(res,rsp){
    rsp.end('hello world')
})

server.listen('3000')
