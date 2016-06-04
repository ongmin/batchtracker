var React = require('react')

// Appears and displays "All products for Batch {batchNumber} after searchBar-button is clicked
// Rewrite this as stateless functional component and remove this comment

var batchRecordsTableHeader = React.createClass({
  render: function () {
    if (this.props.queryBatchNumber.length > 0) {
      return (
        <div id='results-table-header'>
          <p>All products in Batch {this.props.queryBatchNumber}</p>
        </div>
      )
    } else if (this.props.queryBatchNumber.length === 0){
      return (
        <div id='results-table-header'>
          <p>Search for a batch number to see results</p>
        </div>
      )
    }
  }
})

module.exports = batchRecordsTableHeader
