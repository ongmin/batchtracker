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
      disableSignupAction: true,
    })
  },
  render: function () {
    return (
        <div className='contentContainer'>
        <p>Click <a onClick={this.showLock}>here</a> to sign in </p>
        </div>
    )
  }
})

module.exports = loginView
