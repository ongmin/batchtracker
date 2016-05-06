'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function () {
    return (
    <div className='topbar'>
      <ul id='topbar-left'>
        <li><Link to='app'>Paula&#39;s Choice SG&#39;s Batch Checker</Link></li>
        </ul>
      <ul id='topbar-right'>
        <li><Link to='app'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>
    </div>
    )
  }
})

module.exports = Header
