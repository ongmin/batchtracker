'use strict'
var React = require('react')

var loginView = React.createClass({
  propTypes: {
    lock: React.PropTypes.object,
    idToken: React.PropTypes.string
  },
  showLock: function () {
    this.props.lock.show({
      icon: '../../images/pcsglogo-only.png',
      disableSignupAction: true
    })
  },
  render: function () {
    return (
        <div className='login-container'>
        <a onClick={this.showLock} className='sign-in-button-link'><button>Sign in</button></a>
        </div>
    )
  }
})

module.exports = loginView
