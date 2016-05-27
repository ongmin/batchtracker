var React = require('react')
var BatchRecordRow = require('./batchRecordRow')

// Displays all batchRecords matching input after searchBar-button is clicked
// When there is input change in searchbar, unmount component until searchBar-button is clicked again
// If no results, display that there are no results
var batchRecordsTable = React.createClass({
  render: function () {
      var rows = []
      this.props.batchRecords.forEach(function(batchRecord) {
        rows.push(<BatchRecordRow productName={batchRecord.productName} skuNum={batchRecord.skuNum}
          expiryMonth={batchRecord.expiryDate.month} expiryYear={batchRecord.expiryDate.year} key={ batchRecord.skuNum + batchRecord.batchNumber }/>)
      })
      return (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU Number</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
})

module.exports = batchRecordsTable
