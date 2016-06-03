export default 'mongodb://' +
  process.env.BATCHTRACKER_MONGODB_USER + ':' +
  process.env.BATCHTRACKER_MONGODB_PASSWORD + '@' +
  process.env.BATCHTRACKER_MONGODB_URI
