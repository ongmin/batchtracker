// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Header = require('./common/header')
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
// var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div className='bodyContainer'>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = App
