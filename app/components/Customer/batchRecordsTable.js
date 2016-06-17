var React = require('react')
var BatchRecordRow = require('./batchRecordRow')

// Displays all batchRecords matching input after searchBar-button is clicked
// When there is input change in searchbar, unmount component until searchBar-button is clicked again
// If no results, display that there are no results
var batchRecordsTable = React.createClass({
  render: function () {
    var rows = []
    this.props.batchRecords.forEach(function (batchRecord) {
      var row = <BatchRecordRow
                  skuNumber={ batchRecord.skuNumber }
                  productName={ batchRecord.productName }
                  batchNumber={ batchRecord.batchNumber }
                  expiryMonth={ batchRecord.expiryDate.month }
                  expiryYear={ batchRecord.expiryDate.year }
                  key={batchRecord._id}
                />
      rows.push(row)
    })
    return (
        <table id='results-table'>
          <thead>
            <tr>
              <th className='sku-number'>SKU Number</th>
              <th className='product-name'>Product Name</th>
              <th className='expiry-date'>Expiry Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      )
  }
})

module.exports = batchRecordsTable
