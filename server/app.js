// <== Section: Upperware ==>
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Identify connection to MongoDB
import dbUri from './db/uri'

// const dbUri = 'mongodb://' +
// process.env.BATCHTRACKER_MONGODB_USER + ':' + process.env.BATCHTRACKER_MONGODB_PASSWORD +
// '@' + process.env.BATCHTRACKER_MONGODB_URI

// Launch connection
mongoose.connect(dbUri)

// <== Section: Middleware ==>
app.use(bodyParser.json())

// <== Section: Underwear starts here: ==>

// Creates a new Mongoose - MongoDB object (database record)
var BatchRecord = mongoose.model('BatchRecord', {
  skuNum: Number,
  batchNum: String,
  expiryDate: {
    month: Number,
    year: Number
  }
})

// Returns whole database
app.get('/', function (req, res) {
  console.log('get is working')

  BatchRecord.find({}, function (err, record) {
    if (err) throw err
    res.json(record)
  })
})

// Creates a new record
app.post('/create', function (req, res) {
  const batchRecord = new BatchRecord(req.body)
  BatchRecord.save(err => {
    if (err) return console.error(err)
    res.json(req.body)
    console.log('record saved!')
    console.log(req.body)
  })
})

// Update an existing record - In the URL, remember to put /update?batchnum=04323
app.put('/update', function (req, res) {
  var query = { name: req.query.batchnum }
  BatchRecord.findOneAndUpdate(query, req.body, { new: true }, function (err, data) {
    if (err) return console.error(err)
    res.json(data)
    console.log('record updated!')
    console.log(data)
  })
})

// In the URL, remember to put /delete?batchnum=32532
app.delete('/delete', function (req, res) {
  var query = { name: req.query.batchnum }
  BatchRecord.findOneAndRemove(query, function (err, data) {
    if (err) return console.error(err)
    res.json(data)
    console.log(req.query.batchnum + ' removed. :(')
    console.log(data)
  })
})

module.exports = app
