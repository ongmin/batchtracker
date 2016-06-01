'use strict'

var React = require('react')
var InputView = require('./staff/inputView')
var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <InputView />
      </div>
    )
  }
})

module.exports = Home
