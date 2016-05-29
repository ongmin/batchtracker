var React = require('react')


var inputTableHeader = React.createClass({
  render: function () {
    return (
      <div id='results-table-header'>
      <p>All products in Batch {this.props.queryBatchNumber}</p>
      </div>
    )
  }
})

module.exports = inputTableHeader
