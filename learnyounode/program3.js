// for task 3
var fs = require('fs')
fp = process.argv[2]
buff = fs.readFileSync(fp)
var str = buff.toString()
arr = str.split('\n')
var le = arr.length - 1
// print lines
console.log(le)