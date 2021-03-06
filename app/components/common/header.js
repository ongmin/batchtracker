'use strict'
import React from 'react'
import { Link, withRouter } from 'react-router'

var Header = withRouter(
  React.createClass({
    propTypes: {
      // lock: React.PropTypes.object,
      idToken: React.PropTypes.string,
      router: React.PropTypes.object
    },
    getInitialState: function () {
      return {
        profile: null
      }
    },
    logOut: function () {
      window.localStorage.removeItem('userToken')
      this.props.router.replace('/')
    },
    render: function () {
      return (
        <div className='topbar'>
          <div id='topbar-top'>
            <div className='topbar-top-container'>
              <ul id='topbar-top-left'>
                <li><img src='/../images/Icon-FragranceFree.png'/><span>Fragrance-Free</span></li>
                <li><img src='/../images/Icon-Bunny.png'/><span>Never Tested on Animals</span></li>
                <li><img src='/../images/Icon-SmartPackaging.png'/><span>Smart Packaging</span></li>
              </ul>
              <div id='topbar-top-right-container'>
              <input type='checkbox' id='topbar-top-right-toggle'/>
              <label htmlFor='topbar-top-right-toggle' className='topbar-top-right-toggle' data-open='Menu' data-close='Close'></label>
              <ul id='topbar-top-right'>
                <li><Link to='/'>Home</Link></li>
                <li><a href='https://www.paulaschoice.sg/'>Shop Paula&#39;s Choice</a></li>
                <li><a href='http://advice.paulaschoice.sg/'>Expert Advice</a></li>
              {!!window.localStorage.userToken ?
                <li><a onClick={this.logOut}>Logout</a></li> :
                null
              }
            </ul>
          </div>
        </div>
      </div>

      <div id='topbar-middle'>
        <div className='topbar-middle-container'>
          <a href='https://www.paulaschoice.sg/' title='Paula&#39;s Choice Singapore'>
            <div id='topbar-middle-left'>
            </div>
          </a>
            <ul id='topbar-middle-right'>
              Expiry Date Checker
            </ul>
          </div>
      </div>

      <div id='topbar-bottom'>
        <div>Key in the batch code found on the bottom of your product</div>
      </div>
    </div>
    )
    }
  })
)

module.exports = Header
