import mongoose from 'mongoose'

export default mongoose.model('BatchRecord', {
  skuNum: Number,
  batchNum: String,
  expiryDate: {
    month: Number,
    year: Number
  }
})
