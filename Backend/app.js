var express = require('express')
var app = express()
var routes = require('./routes')
var bodyparser = require('body-parser')
var cors = require('cors')



app.use((req,res) => res.sendStatus(404))




let server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = server