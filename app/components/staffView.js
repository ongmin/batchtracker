'use strict'

var React = require('react')
var InputView = require('./staff/inputView')
var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <h2>Input batch records received</h2>
          <InputView />
      </div>
    )
  }
})

module.exports = Home
