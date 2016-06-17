'use strict'

var React = require('react')
import { Link, withRouter } from 'react-router'

var Header = withRouter (
  React.createClass({
    getInitialState: function () {
    return {
      profile: null
    }
  },
  showLock: function () {
    this.props.lock.show()
  },
  componentDidMount: function() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log('Error loading the Profile', err)
        return
      }
      this.setState({profile: profile})
    }.bind(this))
  },
  logOut: function() {
    localStorage.removeItem('userToken')
    this.props.router.replace('/')
  },
  render: function () {
    return (
    <div className='topbar'>
      <div id='topbar-top'>
        <div className="topbar-top-container">
          <ul id='topbar-top-left'>
          <li><img src='/../images/Icon-FragranceFree.png'/><span>Fragrance-Free</span></li>
          <li><img src='/../images/Icon-Bunny.png'/><span>Never Tested on Animals</span></li>
          <li><img src='/../images/Icon-SmartPackaging.png'/><span>Smart Packaging</span></li>
          </ul>
          <div id='topbar-top-right-container'>
            <input type='checkbox' id='topbar-top-right-toggle'/>
            <label for="toggle" class="topbar-top-right-toggle" data-open="Main Menu" data-close="Close Menu"></label>
          <ul id='topbar-top-right'>
            <li><Link to='/'>Home</Link></li>
            <li><a href='https://www.paulaschoice.sg/'>Shop Paula&#39;s Choice</a></li>
            <li><a href='https://advice.paulaschoice.sg/'>Expert Advice</a></li>
              {!!localStorage.userToken ?
                <li><Link to='/staff/batchRecords'>Staff</Link></li>
                : <li><div className='login-box'><a onClick={this.showLock}>Sign In</a></div></li>
              }
              {!!localStorage.userToken ?
                <li><a onClick={this.logOut}>Logout</a></li> :
                null
              }
            </ul>
          </div>
        </div>
      </div>

      <div id='topbar-middle'>
      <a href='https://www.paulaschoice.sg/' title='Paula&#39;s Choice Singapore'>
        <div id='topbar-middle-left'>
        </div>
      </a>
        <ul id='topbar-middle-right'>
          Expiry Date Checker
        </ul>
      </div>

      <div id='topbar-bottom'>
        <div>Key in the batch code found on the bottom of your product</div>
      </div>
    </div>
    )
  }
}))

module.exports = Header

    // <li><Link to='/'>Paula&#39;s Choice SG&#39;s Batch Checker</Link></li>
