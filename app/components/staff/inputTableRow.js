var React = require('react')

// Displays single batchRecord details
// Rewrite this as stateless functional component and remove this comment

var inputTableRow = React.createClass({
  render: function () {
    var inputRowId = 'input-row' + this.props.skuNum + '-' + this.props.batchNumber
    return (
        <tr>
        <td className='batch-number'>{this.props.batchNumber}</td>
        <td className='product-name'>{this.props.productName}</td>
        <td className='sku-number'>{this.props.skuNum}</td>
        <td className='expiry-date'>{this.props.expiryMonth} - {this.props.expiryYear}</td>
        <td className='input-row-edit' id={inputRowId}>edit</td>
        </tr>
    )
  }
})

module.exports = inputTableRow
