const app = require('./app.js')
const port = process.env.PORT || 9999
app.listen(port)

console.log('listening at port: ' + port)
