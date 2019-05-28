var fs = require('fs')
var path = require('path')
var a = function(fp){
	return path.extname(fp)
}
var b = 'hello'
module.exports = {
	showext:a,
	b:b
}
