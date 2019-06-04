const pug = require('pug');
const pugfunc = pug.compileFile('pugfolder/2template.pug');
console.log(pugfunc({name:'neo'}))
