/*
//use path to get ext
var path = require('path')
ext = path.extname(list[i])
*/
var fs = require('fs')
fp = process.argv[2]
ext = process.argv[3]
fs.readdir(fp,function(err,list){
	
	if (err) {console.log(err); return false }
	for ( let i = 0 ; i < list.length; i++ ){
		// TODO 
		if (list[i].lastIndexOf('.') >0 && ext == list[i].substring(list[i].lastIndexOf('.')+1) ) {
			console.log(list[i]);
		}
	}

})