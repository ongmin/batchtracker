'use strict'

var React = require('react')
var Header = require('./common/header')
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

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
