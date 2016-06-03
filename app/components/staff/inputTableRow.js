var React = require('react')
import { Link } from 'react-router'

// Displays single batchRecord details
// Rewrite this as stateless functional component and remove this comment

var inputTableRow = React.createClass({
  handleDelete(){
    this.props.onDelete(this.props.id)
    console.log('deleted')
  },
  render: function () {
    // var inputRowId = 'input-row' + this.props.skuNum + '-' + this.props.batchNumber
    return (
        <tr>
        <td className='batch-number'>{this.props.batchNumber}</td>
        <td className='product-name'>{this.props.productName}</td>
        <td className='sku-number'>{this.props.skuNumber}</td>
        <td className='expiry-date'>{this.props.expiryMonth} - {this.props.expiryYear}</td>
        <td className='input-row-edit'>
          <Link to={{
                      pathname: `/staff/batchRecords/edit/${this.props.id}`                    }}>edit
          </Link>
        </td>
        <td className='input-row-delete' onClick={this.handleDelete}>delete</td>
        </tr>
    )
  }
})

module.exports = inputTableRow
