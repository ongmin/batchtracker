var mongoose = require('mongoose')
var BatchRecord = require('./../models/batchRecord.js')

module.exports = function (app, moltin) {
  var batchRecords = require('./../controllers/batchRecords-server-controller.js')
  app.route('/api/batchRecords')
  .post(function (req, res) {
    var newBatchRecord = new BatchRecord()
    moltin.Product.Find({ sku: req.body.skuNumber }, function (product) {
      newBatchRecord.productName = product[0].title
      newBatchRecord.batchNumber = req.body.batchNumber
      newBatchRecord.skuNumber = req.body.skuNumber
      newBatchRecord.expiryDate.month = req.body.month
      newBatchRecord.expiryDate.year = req.body.year
      // Save the newBatchRecord
      newBatchRecord.save(err => {
        if (err) return console.error(err)
      // then return the whole database
        BatchRecord.find({}, function (err, batchRecords) {
          if (err) throw err
          res.json(batchRecords)
        })
        console.log('batch record created!')
      })
    }, function (error) {
      console.log(error)
      // Something went wrong...
    })
  })
  // .post(batchRecords.create)
  .get(batchRecords.all)

  app.route('/api/batchRecords/:id')
  .delete(batchRecords.delete)
  .put(batchRecords.update)

  app.route('/api/batchRecords/:batchNumber')
  .get(batchRecords.read)
}
