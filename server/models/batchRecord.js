var mongoose = require('mongoose')

var Schema = mongoose.Schema

var batchRecordSchema = Schema({
  timeStamp: {type: Number, required: '{PATH} is required!'},
  skuNumber: { type: String, required: '{PATH} is required!' },
  batchNumber: { type: String, required: '{PATH} is required!' },
  productName: { type: String, required: '{PATH} is required!' },
  expiryDate: {
    month: {
      type: Number,
      required: '{PATH} is required!',
      min: 1,
      max: 12,
      validate: {
        validator: Number.isInteger,
        message: '{PATH} is not an integer value'
      }
    },
    year: {
      type: Number,
      required: '{PATH} is required!',
      min: 2016,
      max: 2050,
      validate: {
        validator: Number.isInteger,
        message: '{PATH} is not an integer value'
      }
    }
  }
})

// Creates compound index to ensure batchNumber and skuNum are unique pair
batchRecordSchema.index({ batchNumber: 1,
                          skuNumber: 1
                        },
                        { unique: true })

var BatchRecord = mongoose.model('BatchRecord', batchRecordSchema)

module.exports = BatchRecord
