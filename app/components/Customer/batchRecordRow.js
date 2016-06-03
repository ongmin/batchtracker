var React = require('react')

// Displays single batchRecord details
// Rewrite this as stateless functional component and remove this comment

var batchRecordRow = React.createClass({
  render: function () {
    return (
        <tr>
        <td className='batch-number'>{this.props.batchNumber}</td>
        <td className='product-name'>{this.props.productName}</td>
        <td className='sku-number'>{this.props.skuNumber}</td>
        <td className='expiry-date'>{this.props.expiryMonth} - {this.props.expiryYear}</td>
        </tr>
    )
  }
})

module.exports = batchRecordRow
