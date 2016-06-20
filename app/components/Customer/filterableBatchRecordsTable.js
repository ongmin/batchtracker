'use strict'

var React = require('react')
var BatchRecordsTableHeader = require('./batchRecordsTableHeader')
var BatchRecordsTable = require('./batchRecordsTable')
var ReactDOM = require('react-dom')

var filterableBatchRecordsTable = React.createClass({
  propTypes: {
    queryBatchNumber: React.PropTypes.string,
    batchRecords: React.PropTypes.array
  },
  componentDidMount: function () {
    ReactDOM.findDOMNode(this).scrollIntoViewIfNeeded()
  },
  componentDidUpdate: function () {
    ReactDOM.findDOMNode(this).scrollIntoViewIfNeeded()
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
