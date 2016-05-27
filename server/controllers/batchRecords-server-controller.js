var mongoose = require('mongoose')
var BatchRecord = require('./../models/batchRecord.js')

// create
exports.create = function (req, res) {
  var newBatchRecord = new BatchRecord()
  newBatchRecord.batchNumber = req.body.batchNumber
  newBatchRecord.skuNum = req.body.skuNum
  newBatchRecord.expiryDate.month = req.body.month
  newBatchRecord.expiryDate.year = req.body.year

  newBatchRecord.save(err => {
    if (err) return console.error(err)
    res.json(JSON.stringify(newBatchRecord))
    console.log('batch record created!')
    console.log(JSON.stringify(newBatchRecord))
  })
}
// update
exports.update = function(req, res) {
  BatchRecord.findByIdAndUpdate(req.params.id, {$set: { batchNumber: req.body.batchNumber,
                                                        skuNum: req.body.skuNum,
                                                        'expiryDate.month': req.body.month,
                                                        'expiryDate.year': req.body.year }
                                                  }, {new: true}, function (err, updatedBatchRecord) {
                                                    if (err) return console.error(err)
                                                    res.json(updatedBatchRecord)
                                                    console.log('record updated!')
                                                    console.log(updatedBatchRecord)
                                                  })
}
// delete
exports.delete = function (req, res) {
  BatchRecord.findByIdAndRemove(req.params.id).exec(function (err, data) {
    if (err) return console.error(err)
    console.log(req.params.id + ' removed. :(')
  })
}
// get batchRecords
exports.read = function (req, res) {
  BatchRecord.find().where('batchNumber').equals(req.params.batchNumber).exec(function (err, batchRecords) {
    if (err) throw err
    console.log(batchRecords)
    res.json(batchRecords)
  })
}

exports.all = function (req, res) {
  BatchRecord.find({}, function (err, batchRecords) {
    if (err) throw err
    console.log(batchRecords)
    res.json(batchRecords)
  })
}
