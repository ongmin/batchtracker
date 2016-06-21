'use strict'
var React = require('react')

var batchRecordsTableHeader = React.createClass({
  propTypes: {
    queryBatchNumber: React.PropTypes.number
  },
  render: function () {
    if (this.props.queryBatchNumber.length > 0) {
      return (
        <div id='results-table-header'>
          <p>All products in Batch {this.props.queryBatchNumber}</p>
        </div>
      )
    } else if (this.props.queryBatchNumber.length === 0) {
      return (
        <div id='results-table-header'>
          <p></p>
        </div>
      )
    }
  }
})

module.exports = batchRecordsTableHeader
