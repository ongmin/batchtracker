var BatchRecord = require('./../models/batchRecord.js')

module.exports = function (app, moltin) {
  app.route('/api/batchRecords')
  .get(function (req, res) {
    BatchRecord.find({}, function (err, batchRecords) {
      if (err) throw err
      console.log(batchRecords)
      res.json(batchRecords)
    })
  })

  app.route('/api/protected/batchRecords')
  .post(function (req, res) {
    var newBatchRecord = new BatchRecord()
    moltin.Product.Find({ sku: req.body.skuNumber }, function (product) {
      newBatchRecord.productName = product[0].title
      newBatchRecord.batchNumber = req.body.batchNumber
      newBatchRecord.skuNumber = req.body.skuNumber
      newBatchRecord.expiryDate.month = req.body.month
      newBatchRecord.expiryDate.year = req.body.year
      console.log(product[0].title)

      // Save the newBatchRecord
      newBatchRecord.save(err => {
        if (err) {
          if(err.code === 11000) {
            res.status(409).send('Record is already in the database.')
          }
          else {
            var errors = []
            for (var property in err.errors) {
              console.log(err.errors[property].message)
                errors.push(err.errors[property].message)
            }
              res.status(400).json(errors)
          }
          return
        }
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

  app.route('/api/protected/batchRecords/:id')
  .delete(function (req, res) {
    BatchRecord.findByIdAndRemove(req.params.id)
    .exec(function (err, data) {
      if (err) return console.error(err)
      BatchRecord.find({}, function (err, batchRecords) {
        if (err) throw err
        console.log(batchRecords)
        res.json(batchRecords)
      })
    })
  })
  .put(function (req, res) {
    console.log(req.body.id)
    moltin.Product.Find({ sku: req.body.skuNumber }, function (product) {
      BatchRecord.findByIdAndUpdate(req.body.id,
        {$set: {  productName: product[0].title,
                  batchNumber: req.body.batchNumber,
                  skuNumber: req.body.skuNumber,
                  'expiryDate.month': req.body.month,
                  'expiryDate.year': req.body.year }},
        {new: true},
        function (err, updatedBatchRecord) {
          if (err) return console.error(err)
          // then return the whole database
            BatchRecord.find({}, function (err, batchRecords) {
              if (err) throw err
              res.json(batchRecords)
            })
        })
    })
  })

  app.route('/api/batchRecords/:batchNumber')
  .get(function (req, res) {
    BatchRecord.find()
    .where('batchNumber')
    .equals(req.params.batchNumber)
    .exec(function (err, batchRecords) {
      if (err) throw err
      console.log(batchRecords)
      res.json(batchRecords)
    })
  })
}
