var React = require('react')
var InputTableRow = require('./inputTableRow')

var inputTable = React.createClass({
  propTypes: {
    onDelete: React.PropTypes.func.isRequired
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
                  />
        console.log(batchRecord._id)
        rows.push(row)
      })
    return (
        <table id='results-table'>
          <thead>
            <tr>
              <th className='sku-number'>SKU Number</th>
              <th className='product-name'>Product Name</th>
              <th className='batch-number'>Batch Number</th>
              <th className='expiry-date'>Expiry Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      )
  }
})

module.exports = inputTable
