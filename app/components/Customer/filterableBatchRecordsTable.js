'use strict'

var React = require('react')
var BatchRecordsTableHeader = require('./batchRecordsTableHeader')
var BatchRecordsTable = require('./batchRecordsTable')
var ReactDOM = require('react-dom')
require('smoothscroll-polyfill').polyfill();

var filterableBatchRecordsTable = React.createClass({
  propTypes: {
    queryBatchNumber: React.PropTypes.string,
    batchRecords: React.PropTypes.array
  },
  componentDidMount: function () {
    window.scrollTo({ top: 330, left: 0, behavior: 'smooth' });
  },
  componentDidUpdate: function () {
    window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });
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
