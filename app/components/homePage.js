'use strict'

var React = require('react')
var FilterableBatchRecordsTable = require('./Customer/filterableBatchRecordsTable')
var Home = React.createClass({
  render: function () {
    return (
      <div className='bodyContainer'>
        <div className='contentContainer'>
          <h2>Welcome to Paula&#39;s Choice Singapore</h2>
          <p>Key in your batch code found on the bottom of your product</p>
          <FilterableBatchRecordsTable />
      </div>
    </div>
    )
  }
})

module.exports = Home
