
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

var promise2 = function(){
	if (false) {
		return new Promise(function(resolve,reject) {
			resolve('a')
		})
	}
	else {
		return promise1
	}

}


promise2().then(function(value) {
  console.log(value);
  // expected output: "foo"
});

