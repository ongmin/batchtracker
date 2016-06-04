
var React = require('react')
var Header = require('./common/header')
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
// var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  componentWillMount: function () {
      this.lock = new Auth0Lock('KIiRYkKqHIoj8wphC5YOLWge55ipeCTF', 'makantime.auth0.com')
      this.setState({idToken: this.getIdToken()})
  },
  getIdToken: function () {
    var idToken = localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.log('Error signing in', authHash)
        return null
      }
    }
    return idToken
  },
  render: function () {
    if (this.state.idToken) {
      return (
        <div>
          <Header lock={this.lock} idToken={this.state.idToken} />
          <div className='bodyContainer'>
            <img id='background-image' src='images/BatchTracker-banner.jpg'/>
            {this.props.children}
          </div>
        </div>
        )
    } else {
      return (
        <div>
          <Header lock={this.lock}/>
          <div className='bodyContainer'>
            <img id='background-image' src='images/BatchTracker-banner.jpg'/>
            {this.props.children}
          </div>
        </div>

        )
    }
  }
})

module.exports = App
