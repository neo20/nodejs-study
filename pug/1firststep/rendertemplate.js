const pug = require('pug');
const pugfunc = pug.compileFile('template.pug');
console.log(pugfunc({name:'neo'}))
