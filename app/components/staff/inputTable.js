'use strict'
import React from 'react'
import InputTableRow from './inputTableRow'

var inputTable = React.createClass({
  propTypes: {
    onDelete: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    batchRecords: React.PropTypes.array
  },
  render: function () {
    var rows = []
    this.props.batchRecords.forEach((batchRecord) => {
      var row = <InputTableRow
                    batchNumber={batchRecord.batchNumber}
                    productName={batchRecord.productName}
                    skuNumber={batchRecord.skuNumber}
                    expiryMonth={batchRecord.expiryDate.month}
                    expiryYear={batchRecord.expiryDate.year}
                    key={batchRecord._id} id={batchRecord._id}
                    onDelete={this.props.onDelete}
                    onUpdate={this.props.onUpdate}
                  />
      console.log(batchRecord._id)
      rows.push(row)
    })
    return (
        <div>
          <div className='input-results-table-header'>
            <span className='sku-number'>SKU Number</span>
            <span className='product-name'>Product Name</span>
            <span className='batch-number'>Batch Number</span>
            <span className='expiry-date'>Expiry Date</span>
            <span className='input-row-edit'></span>
            <span className='input-row-delete'></span>
          </div>
          <div className='input-results-table-body'>{rows}</div>
        </div>
      )
  }
})

module.exports = inputTable
