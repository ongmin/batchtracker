const BatchRecord = require('./../models/batchRecord.js')

module.exports = function (app, schemaClient) {
  app.route('/api/batchRecords')
  .get((req, res) => {
    BatchRecord.find({}).exec()
    .then(batchRecords => {
      res.json(batchRecords)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  app.route('/api/protected/batchRecords')
  .post((req, res) => {
    var newBatchRecord = new BatchRecord()
    schemaClient.get('/products?sku=' + req.body.skuNumber)
    .then((products) => {
      if (products['count'] === 1) return products
      return schemaClient.get('/products:variants?sku=' + req.body.skuNumber)
    })
    .then((products) => {
      if (products['count'] === 0) {
        throw new Error('SKU does not exist in database')
      }
      return products
    })
    .then((products) => {
      var title = products['results'][0]['name']
      newBatchRecord.productName = title
      newBatchRecord.batchNumber = req.body.batchNumber
      newBatchRecord.skuNumber = req.body.skuNumber
      newBatchRecord.expiryDate.month = req.body.month
      newBatchRecord.expiryDate.year = req.body.year
      return newBatchRecord.save()
    })
      .then(batchRecord => {
        console.log(batchRecord._id + ' created!')
        return BatchRecord.find({}).exec()
      })
      .then(batchRecords => {
        res.json(batchRecords)
      })
      .catch(error => {
        console.log(error)
        if (error.code === 11000) {
          res.status(409).send('Record is already in the database.')
        } else if (error.errors) {
          var errors = []
          for (var property in error.errors) {
            console.log(error.errors[property].message)
            errors.push(error.errors[property].message)
          }
          res.status(400).json(errors)
        }
        else res.status(400).send(error.toString())
      })
  })
  app.route('/api/protected/batchRecords/:id')
  .delete(function (req, res) {
    BatchRecord.findByIdAndRemove(req.params.id).exec()
    .then((batchRecord) => {
      console.log(batchRecord._id + ' deleted')
      return BatchRecord.find({}).exec()
    })
    .then((batchRecords) => {
      res.json(batchRecords)
    })
    .catch(error => {
      console.error(error)
    })
  })
  .put(function (req, res) {
    schemaClient.get('/products?sku=' + req.body.skuNumber)
    .then((products) => {
      if (products['count'] === 1) return products
      return schemaClient.get('/products:variants?sku=' + req.body.skuNumber)
    })
    .then((products) => {
      if (products['count'] === 0) {
        throw new Error('SKU does not exist in database')
      }
      return products
    })
    .then((products) => {
      return BatchRecord.findByIdAndUpdate(req.body.id,
          { $set: {
            productName: products['results'][0]['name'],
            batchNumber: req.body.batchNumber,
            skuNumber: req.body.skuNumber,
            'expiryDate.month': req.body.month,
            'expiryDate.year': req.body.year }
                  },
          {new: true, runValidators: true})
    })
    .then(batchRecord => {
      console.log(batchRecord._id + ' updated!')
      return BatchRecord.find({}).exec()
    })
    .then(batchRecords => {
      res.json(batchRecords)
    })
    .catch(error => {
      console.log(error)
      if (error.code === 11000) {
        res.status(409).send('Record is already in the database.')
      } else if (error.errors) {
        var errors = []
        for (var property in error.errors) {
          console.log(error.errors[property].message)
          errors.push(error.errors[property].message)
        }
        res.status(400).json(errors)
      }
      else res.status(400).send(error.toString())
    })
  })

  app.route('/api/batchRecords/:batchNumber')
  .get((req, res) => {
    BatchRecord.find()
    .where('batchNumber')
    .equals(req.params.batchNumber)
    .exec()
    .then(batchRecords => {
      res.json(batchRecords)
    })
    .catch(error => {
      console.error(error)
    })
  })
}
