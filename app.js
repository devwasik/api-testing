const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

app.use('/postRoute', require('./routes/postRoutes'))
app.use('/getRoute', require('./routes/getRoutes'))

module.exports = app