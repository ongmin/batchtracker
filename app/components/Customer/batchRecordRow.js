var React = require('react')

// Displays single batchRecord details
// Rewrite this as stateless functional component and remove this comment

var batchRecordRow = React.createClass({
  render: function () {
    return (
        <tr>
        <td>{this.props.batchNumber}</td>
        <td>{this.props.productName}</td>
        <td>{this.props.skuNum}</td>
        <td>{this.props.expiryMonth} - {this.props.expiryYear}</td>
      </tr>
    )
  }
})

module.exports = batchRecordRow
