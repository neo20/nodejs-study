/*
使用 array的filter方法更便捷
*/
var fs = require('fs');
var path = require('path');
module.exports = function(fp,ext,callback) {

	
	fs.readdir(fp,function(err,list){
		let result = []
	    if (err) {
	    	return callback(err,[]); 
	   	}
    	for ( let i = 0 ; i < list.length; i++ ){
        	if ( ext == path.extname(list[i]).substr(1) ) { 
               	result.push(list[i]);
			}
        }
        return callback(null,result)
    })
}
/*
module.exports = {
	flist : filterlista
}
*/