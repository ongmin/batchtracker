'use strict'

var React = require('react')
import { Link } from 'react-router'

var Header = React.createClass({
  render: function () {
    return (
    <div className='topbar'>
      <div id='topbar-top'>
        <ul id='topbar-top-left'>
        <li><img src='/../images/Icon-FragranceFree.png'/><span>Fragrance-Free</span></li>
        <li><img src='/../images/Icon-Bunny.png'/><span>Never Tested on Animals</span></li>
        <li><img src='/../images/Icon-SmartPackaging.png'/><span>Smart Packaging</span></li>
        </ul>
        <ul id='topbar-top-right'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/staff/batchRecords'>Staff</Link></li>
        <li><Link to='about'>About</Link></li>
        </ul>
      </div>

      <div id='topbar-middle'>
        <ul id='topbar-middle-left'>
          <a href='https://www.paulaschoice.sg/' title='Paula&#39;s Choice Singapore'>
            <img src='https://www.paulaschoice.sg/skin/frontend/ultimo/default/images/pcsglogo.png'
            alt='Paula&#39;s Choice Singapore' />
          </a>
        </ul>
        <ul id='topbar-middle-right'>
          Expiry Batch Tracker
        </ul>
      </div>

      <div id='topbar-bottom'>
        <div>Key in the batch code found on the bottom of your product</div>
      </div>
    </div>
    )
  }
})

module.exports = Header

    // <li><Link to='/'>Paula&#39;s Choice SG&#39;s Batch Checker</Link></li>
