var React = require('react')
var Header = require('./common/header')
var Modal = require('./common/modal')
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var App = React.createClass({
  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children
      this.previousChildren = this.props.children
    }
  },
  componentWillMount: function () {
      // this.lock = new Auth0Lock('KIiRYkKqHIoj8wphC5YOLWge55ipeCTF', 'makantime.auth0.com')
      this.lock = new Auth0Lock('pyoICxnYbHkIf0azgqVB2bucWqAFUdKY', 'belgian-chocolate.auth0.com');
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
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    if (this.state.idToken) {
      return (
        <div>
          <Header lock={this.lock} idToken={this.state.idToken} />
          <div className='bodyContainer'>
          { isModal ?
            this.previousChildren :
            this.props.children
          }
          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}
          </div>
        </div>
        )
    } else {
      return (
        <div>
          <Header lock={this.lock}/>
          <div className='bodyContainer'>
          {isModal ?
            this.previousChildren :
            this.props.children
            }

          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}
          </div>
        </div>

        )
    }
  }
})

module.exports = App
