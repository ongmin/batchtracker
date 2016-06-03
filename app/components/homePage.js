'use strict'

var React = require('react')
var FilterableBatchRecordsTable = require('./customer/filterableBatchRecordsTable')
var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <div className='contentContainer-background'>
          <h2>Welcome to Paula&#39;s Choice Singapore</h2>
          <FilterableBatchRecordsTable />
          </div>
      </div>
    )
  }
})

module.exports = Home
