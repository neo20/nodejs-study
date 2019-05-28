var mymod = require('./mymodule')
var ext = process.argv[3]
var path = process.argv[2]
mymod(path,ext,function(e,data){
	if (e) {
		console.log('error happens '+ e)
	}
	data.forEach(function(item){
		console.log(item);
	})
})
