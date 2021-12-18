var express = require('express')
var serveStatic = require('serve-static')
 
var app = express()


/*
We are hosting a simple static web site to mimic the Github static structure
The base path of Github static site is as follows:
    https://sdg002.github.io/<projectname>

In our case, this translates to
    https://sdg002.github.io/MyReactTutorial

We are using the subfolder 'static' under the root folder to publish each of the React projects
*/

//the physicalFolder becomes the root of the web site hosted at virtual root virtualFolder

const port=3001
const virtualFolder='/MyReactTutorial/static/'
const physicalFolder=__dirname+'/'
console.log(`Going to start listening for HTTP requests on port ${port}`)
console.log(`Physical folder=${physicalFolder}`)
console.log(`Virtual folder=${virtualFolder}`)
app.use(virtualFolder,serveStatic(physicalFolder))
app.listen(port)

