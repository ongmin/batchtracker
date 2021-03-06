'use strict'
import React from 'react'

var batchRecordRow = React.createClass({
  propTypes: {
    skuNumber: React.PropTypes.string,
    productName: React.PropTypes.string,
    expiryMonth: React.PropTypes.number,
    expiryYear: React.PropTypes.number
  },
  render: function () {
    var expMonth = ''
    switch (this.props.expiryMonth) {
      case 1: expMonth = 'Jan'; break
      case 2: expMonth = 'Feb'; break
      case 3: expMonth = 'Mar'; break
      case 4: expMonth = 'Apr'; break
      case 5: expMonth = 'May'; break
      case 6: expMonth = 'Jun'; break
      case 7: expMonth = 'Jul'; break
      case 8: expMonth = 'Aug'; break
      case 9: expMonth = 'Sep'; break
      case 10: expMonth = 'Oct'; break
      case 11: expMonth = 'Nov'; break
      case 12: expMonth = 'Dec'; break
      default: expMonth = 'Year'
    }
    return (
        <tr>
        <td className='sku-number' data-label='SKU Number'>{this.props.skuNumber}</td>
        <td className='product-name' data-label='Product Name'>{this.props.productName}</td>
        <td className='expiry-date' data-label='Expiry Date'>{expMonth} / {this.props.expiryYear}</td>
        </tr>
    )
  }
})

module.exports = batchRecordRow
