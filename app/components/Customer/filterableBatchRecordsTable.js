'use strict'

var React = require('react')
var BatchRecordsTableHeader = require('./batchRecordsTableHeader')
var BatchRecordsTable = require('./batchRecordsTable')

var filterableBatchRecordsTable = React.createClass({
  propTypes: {
    queryBatchNumber: React.PropTypes.string,
    batchRecords: React.PropTypes.array
  },
  render: function () {
    return (
      <div className='container-header-table'>
        <BatchRecordsTableHeader
          queryBatchNumber={this.props.queryBatchNumber} />
        <BatchRecordsTable
          batchRecords={this.props.batchRecords} />
      </div>
    )
  }
})

module.exports = filterableBatchRecordsTable
