'use strict'

var React = require('react')
var InputView = require('./staff/inputView')
var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <h2>Hello Staff</h2>
          <p>Key in your batch codes found on the receiving document</p>
          <InputView />
      </div>
    )
  }
})

module.exports = Home
