var mongoose = require('mongoose')
var BatchRecord = require('./../models/batchRecord.js')

module.exports = function (app, moltin) {
  var batchRecords = require('./../controllers/batchRecords-server-controller.js')
  app.route('/api/batchRecords')
  .post(function (req, res) {
    var newBatchRecord = new BatchRecord()
      moltin.Product.Find({sku: req.body.skuNum }, function(product) {
        newBatchRecord.productName = product[0].title
    }, function(error) {
      console.log(error)
        // Something went wrong...
    })
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
  })
  .get(batchRecords.all)

  app.route('/api/batchRecords/:id')
  .delete(batchRecords.delete)
  .put(batchRecords.update)

  app.route('/api/batchRecords/:batchNumber')
  .get(batchRecords.read)
}
