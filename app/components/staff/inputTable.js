var React = require('react')
var InputTableRow = require('./inputTableRow')

var inputTable = React.createClass({
  render: function () {
      var rows = []
      console.log(this.props.batchRecords.constructor == Array)
      console.log(typeof this.props.batchRecords)
      this.props.batchRecords.forEach(function (batchRecord) {
        rows.push(<InputTableRow batchNumber={batchRecord.batchNumber} productName={batchRecord.productName} skuNum={batchRecord.skuNum}
          expiryMonth={batchRecord.expiryDate.month} expiryYear={batchRecord.expiryDate.year} key={ batchRecord.skuNum + batchRecord.batchNumber }/>)
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
