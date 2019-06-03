var fs = require('fs')
fs.watch('./tmp', { encoding: 'utf8' }, (eventType, filename) => {
	if (filename) {
		console.log(filename);
		      // Prints: <Buffer ...>
	}
});
