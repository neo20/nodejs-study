const express = require('express')
const pug = require('pug')
const fs = require('fs')

var app = express()

app.use('/static', express.static('public'))

app.get('/*', function(req, res) {
    let pugfile = 'template' + req.path + '.pug'
    fs.exists(pugfile,function(exists){
        if (exists) {
            let pugfunc = pug.compileFile(pugfile)
            res.send(pugfunc())
        } else {
            res.send( 'path : '+req.path + ' not found' )
        }
    })
    
})
app.listen(3000, () => console.log('EasyPug app listening on port 3000!'))
