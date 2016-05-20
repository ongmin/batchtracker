var BatchRecord = require('./db/batchRecord.js')

module.exports = function (app) {
  // Customer Routes
  // Returns all batchRecords with batchNumber matching query string of format '/batchRecords?batchNumber='
  app.get('/batchRecords', function (req, res) {
    BatchRecord.find().where('batchNumber').equals(req.query.batchNumber).exec(function (err, batchRecords) {
      if (err) throw err
      console.log(batchRecords)
      res.json(batchRecords)
    })
  })
  // Admin Routes
  // Creates a new batchRecord
  app.post('/admin/batchRecords', function (req, res) {
    var newBatchRecord = new BatchRecord()
    newBatchRecord.batchNumber = req.body.batchNumber
    newBatchRecord.skuNum = req.body.skuNum
    newBatchRecord.expiryDate.month = req.body.month
    newBatchRecord.expiryDate.year = req.body.year

    newBatchRecord.save(err => {
      if (err) return console.error(err)
      // res.json(JSON.stringify(newBatchRecord))
      console.log('batch created!')
      console.log(JSON.stringify(newBatchRecord))
      res.json(newBatchRecord)
    })
  })
  // Displays all batchRecords
  app.get('/admin/batchRecords', function (req, res) {
    BatchRecord.find({}, function (err, batchRecords) {
      if (err) throw err
      res.json(batchRecords)
    })
  })
  // Update action for single batchRecord based on id
  app.put('/admin/batchRecords/:id', function (req, res) {
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
  })

  // Delete action for single batchRecord
  app.delete('/admin/batchRecords/:id', function (req, res) {
    BatchRecord.findByIdAndRemove(req.params.id).exec(function (err, deletedBatchRecord) {
      if (err) return console.error(err)
      console.log(req.params.id + ' removed. :(')
      res.json(deletedBatchRecord)
    })
  })
  // Write Authentication routes here
}
// route middleware to make sure a user is logged in
// if they aren't redirect them to the home page
// function isLoggedIn (req, res, next) {
//   if (req.isAuthenticated()) return next()
//   res.redirect('/admin')
// }
