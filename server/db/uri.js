export default 'mongodb://' +
  process.env.MONGODB_USER + ':' +
  process.env.MONGODB_PASSWORD + '@' +
  process.env.MONGODB_URI
