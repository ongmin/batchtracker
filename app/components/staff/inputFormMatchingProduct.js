var React = require('react')

// Appears and displays "All products for Batch {batchNumber} after searchBar-button is clicked
// Rewrite this as stateless functional component and remove this comment

var InputFormMatchingProduct = React.createClass({
  render: function () {
    return (
      <div id='results-table-header'>
      <p>Matching Product Placeholder {this.props.queryBatchNumber}</p>
      </div>
    )
  }
})

module.exports = InputFormMatchingProduct
