var http = require('http')
tmp = {}
datatmp = {}
for (let i = 2;i<5;i++) {
	let url = process.argv[i]
	http.get(url,function(response){
		if (!(i in datatmp)) {
			datatmp[i] = ''
		}
		response.setEncoding('utf8')
		response.on('data',function(data){
			datatmp[i] += data
		})
		response.on('end',function(){
			tmp[i] = datatmp[i]
			if ( 2 in tmp && 3 in tmp && 4 in tmp ) {
				for (let i = 2;i<5;i++) {
					console.log(tmp[i])
				}
			}
		})

	})
}
