var serverActions = require('../actions/server-actions')
var request = require('superagent')

module.exports = {
  receiveBatchRecordResponse: function (queryBatchNumber) {
    request.get(`api/batchRecords/${queryBatchNumber}`)
      .set('Accept', 'application/json')
      .end(function (err, response) {
        if (err) return console.error(err)
        serverActions.receiveBatchRecordResponse(response.body)
      })
  }
}
