// <== Section: Upperware ==>
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
import path from 'path'
import cors from 'cors'
import fallback from 'express-history-api-fallback'

// Identify connection to MongoDB
import dbUri from './models/uri'
// Launch connection

mongoose.connect('mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@ds015962.mlab.com:15962/decorative-hedgehogs')

const root = path.join(__dirname, '../dist')


// <== Section: Middleware ==>
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(root))
app.use(cors())

require('./routes/batchRecords-server-routes.js')(app)

app.get('/', function(req, res) {
  res.render('../app/index.html')
})

app.use(fallback('index.html', { root: root }))

module.exports = app
