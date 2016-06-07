var React = require('react')
var InputTableRow = require('./inputTableRow')

var inputTable = React.createClass({
  propTypes: {
    onDelete: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired
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
        <div id='results-table'>
          <div className="results-table-header">
            <div className='sku-number'>SKU Number</div>
            <div className='product-name'>Product Name</div>
            <div className='batch-number'>Batch Number</div>
            <div className='expiry-date'>Expiry Date</div>
            <div className='input-row-edit'></div>
            <div className='input-row-delete'></div>
          </div>
          <div className='results-table-body'>{rows}</div>
        </div>
      )
  }
})

module.exports = inputTable
