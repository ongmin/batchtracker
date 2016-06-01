var React = require('react')
var InputTableRow = require('./inputTableRow')

var inputTable = React.createClass({
  render: function () {
      var rows = []
      this.props.batchRecords.forEach(function (batchRecord) {
        console.log(batchRecord._id)
        rows.push(<InputTableRow batchNumber={batchRecord.batchNumber} productName={batchRecord.productName} skuNum={batchRecord.skuNum}
          expiryMonth={batchRecord.expiryDate.month} expiryYear={batchRecord.expiryDate.year} key={batchRecord._id} id={batchRecord._id} />)
      })
      return (
        <table id='results-table'>
          <thead>
            <tr>
              <th>Batch Number</th>
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

module.exports = inputTable
