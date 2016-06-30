import React from 'react'
import Header from './common/header'
import Modal from './common/modal'

var App = React.createClass({
  componentWillReceiveProps (nextProps) {
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
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    if (this.state.idToken) {
      return (
        <div>
          <Header idToken={this.state.idToken} />
          <div className='bodyContainer'>
          { isModal ?
            this.previousChildren :
            React.cloneElement(this.props.children, { lock: this.lock, idToken: this.state.idToken })
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
            React.cloneElement(this.props.children, { lock:this.lock })
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
