'use strict'

var React = require('react')
import { Link } from 'react-router'

var Header = React.createClass({
  render: function () {
    return (
    <div className='topbar'>
      <ul id='topbar-left'>
        <li><Link to='/'>Paula&#39;s Choice SG&#39;s Batch Checker</Link></li>
        </ul>
      <ul id='topbar-right'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>
    </div>
    )
  }
})

module.exports = Header
