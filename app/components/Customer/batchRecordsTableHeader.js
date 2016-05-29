var React = require('react')

// Appears and displays "All products for Batch {batchNumber} after searchBar-button is clicked
// Rewrite this as stateless functional component and remove this comment

var batchRecordsTableHeader = React.createClass({
  render: function () {
    return (
      <div id='results-table-header'>
      <p>All products in Batch {this.props.queryBatchNumber}</p>
      </div>
    )
  }
})

module.exports = batchRecordsTableHeader
