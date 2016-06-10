'use strict'

var React = require('react')
var FilterableBatchRecordsTable = require('./customer/filterableBatchRecordsTable')
var Home = React.createClass({
  render: function () {
    return (
        <div className='contentContainer'>
          <FilterableBatchRecordsTable />
        </div>
    )
  }
})

module.exports = Home
