'use strict'

var React = require('react')

var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <h2>Welcome to Paula&#39;s Choice Singapore</h2>
          <p>Key in your batch code found on the bottom of your product</p>
          <div id='container'>
            <h2>This is a table</h2>
            <h3>But you cannot eat on it</h3>
            <button>button</button>
          </div>
        </div>
    )
  }
})

module.exports = Home
