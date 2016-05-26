var React = require('react')
var BatchRecordRow = require('./batchRecordRow')

// Stateless functional component
var batchRecordsTable = React.createClass({
  render: function () {
      var rows = []
      this.props.batchRecords.forEach(function(batchRecord) {
        rows.push(<BatchRecordRow productName={batchRecord.productName} skuNum={batchRecord.skuNum}
          expiryMonth={batchRecord.expiryDate.month} expiryYear={batchRecord.expiryDate.year} />)
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
