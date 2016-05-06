var expect = require('chai').expect
var request = require('supertest')
var app = require('../app.js')

describe('/', () => {
  it('should respond with JSON data', done => {
    request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done)
  })
})
