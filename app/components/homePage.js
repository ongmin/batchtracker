'use strict'

var React = require('react')
var FilterableBatchRecordsTable = require('./customer/filterableBatchRecordsTable')
var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <h2>Welcome to Paula&#39;s Choice Singapore</h2>
          <p>Key in your batch code found on the bottom of your product</p>
          <FilterableBatchRecordsTable />
      </div>
    )
  }
})

module.exports = Home
