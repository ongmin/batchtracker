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
import Schema from 'schema-client'
mongoose.Promise = require('bluebird')

var jwtCheck = jwt({ secret: new Buffer(process.env.BATCHTRACKER_AUTH0_BACK_KEY, 'base64'),
  audience: process.env.BATCHTRACKER_AUTH0_BACK_CLIENTID
})

var schemaClient = new Schema.Client(process.env.Schema_PublicID, process.env.Schema_PublicKey)

const root = path.join(__dirname, '../dist')

mongoose.connect(dbUri)
app.use('/api/protected/batchRecords/', jwtCheck)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(root))
app.use(cors())

require('./routes/batchRecords-server-routes.js')(app, schemaClient)

app.get('/', function (req, res) { res.render('../app/index.html') })
app.use(fallback('index.html', { root: root }))

module.exports = app
