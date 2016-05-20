var mongoose = require('mongoose')

var Schema = mongoose.Schema
// batchRecordSchema
// Validation methods:
// SKU num + batchNumber must be unique pair
// All fields must be present
// Month must be between 1-12
// Year must not be 15 years greater than current year or less than current year
var batchRecordSchema = Schema({
  skuNum: { type: String, required: '{PATH} is required!' },
  batchNumber: { type: String, required: '{PATH} is required!' },
  productName: String,
  expiryDate: {
    month: { type: Number,
             required: '{PATH} is required!',
             min: 1,
             max: 12
           },
    year: { type: Number, required: '{PATH} is required!' }
  }
})

// Creates compound index to ensure batchNumber and skuNum are unique pair
batchRecordSchema.index({ batchNumber: 1, skuNum: 1 }, { unique: true })

// Write a method to translate skuNum to productName using the Moltin API
batchRecordSchema.methods.getProductName = function () {
  // return productName
}

var BatchRecord = mongoose.model('BatchRecord', batchRecordSchema)
module.exports = BatchRecord
