'use strict'
var React = require('react')
var InputView = require('./inputView')
var LoginView = require('./loginView')

var Home = React.createClass({
  componentWillMount: function () {
      this.lock = new Auth0Lock('pKAebJyhjpuES7OTH5tp2LMwEJf6NRfT', 'belgian-chocolate.auth0.com')
      this.setState({idToken: this.getIdToken()})
  },
  getIdToken: function () {
    var idToken = window.localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        window.localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.log('Error signing in', authHash)
        return null
      }
    }
    return idToken
  },

  render: function () {
    return (
      <div className='contentContainer'>
      {!!window.localStorage.userToken ?
              <InputView />
              : <LoginView lock={this.props.lock} idToken={this.props.idToken} />
            }
      </div>
    )
  }
})

module.exports = Home
