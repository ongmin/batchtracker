module.exports = function (app) {
  var batchRecords = require('./../controllers/batchRecords-server-controller.js')
	// var users = require('./../controllers/users.server.controller.js')
  app.route('/api/batchRecords')
  .post(batchRecords.create)
  .get(batchRecords.all)

  app.route('/api/batchRecords/:id')
  .delete(batchRecords.delete)
  .put(batchRecords.update)

  app.route('/api/batchRecords/:batchNumber')
  .get(batchRecords.read)
}
