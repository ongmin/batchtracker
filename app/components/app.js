// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Header = require('./common/header')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className='headerContainer'>
        <Header />
        </div>
        <div className='bodyContainer'>
        <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = App
