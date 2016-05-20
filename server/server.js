const app = require('./app.js')
const port = process.env.PORT || 8080

app.listen(port)
console.log('listening at port: ' + port)
