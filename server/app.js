// <== Section: Upperware ==>
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import fallback from 'express-history-api-fallback'
import dbUri from './models/uri'
import jwt from 'express-jwt'
const app = express()

var jwtCheck = jwt({ secret: new Buffer(process.env.BATCHTRACKER_AUTH0_BACK_KEY, 'base64'),
  audience: process.env.BATCHTRACKER_AUTH0_BACK_CLIENTID
})

const moltin = require('moltin')({
  publicId: process.env.MOLTIN_PublicID,
  secretKey: process.env.MOLTIN_PublicKey
})

const root = path.join(__dirname, '../dist')

mongoose.connect(dbUri)
app.use('/api/protected/batchRecords/', jwtCheck)

moltin.Authenticate(function () {
  // Application starting point: Recommended to wrap  application's entry point inside the
  // authentication method, this will attempt to authenticate every time your script is called
  // but will not make the call until your token has expired.
  // <== Section: Middleware ==>
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static(root))
  app.use(cors())

  require('./routes/batchRecords-server-routes.js')(app, moltin, jwtCheck)

  app.get('/', function (req, res) { res.render('../app/index.html') })
  app.use(fallback('index.html', { root: root }))

})

module.exports = app
