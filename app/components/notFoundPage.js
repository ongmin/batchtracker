'use strict'

var React = require('react')
var Link = require('react-router').Link

var NotFoundPage = React.createClass({
  render: function () {
    return (
      <div className='contentContainer'>
        <h1>Page Not Found</h1>
        <p>Sorry, there is nothing to see here.</p>
        <p><Link to='/'>Back to Home</Link></p>
      </div>
    )
  }
})

module.exports = NotFoundPage
