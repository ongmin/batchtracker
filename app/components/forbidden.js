'use strict'
var React = require('react')

const forbidden = React.createClass({
  render() {
    return (
      <div>
      <h1>Whoops!</h1>
        <p>You are not authorised to view this page. Please log in to continue</p>
      </div>
    )
  }
})

module.exports = forbidden
