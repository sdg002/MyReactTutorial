var express = require('express')
var serveStatic = require('serve-static')
 
var app = express()
 
//The following worked the physical [root]\static becomes the root of the web site
//app.use(serveStatic(__dirname+'/static', { 'index': ['index.htm','default.html', 'default.htm'] }))

//This worked well, just like the above
//app.use(serveStatic(__dirname+'/static'))

//This worked well, the physical [root]\static becomes the root of the web site /mysite/
app.use('/MyReactTutorial/static/',serveStatic(__dirname+'/'))


/*
Trying to map https://sdg002.github.io/MyReactTutorial/index.html
to local server

*/

//
app.listen(3000)