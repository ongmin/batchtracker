var React = require('react')

// Displays single batchRecord details
// Rewrite this as stateless functional component and remove this comment

var batchRecordRow = React.createClass({
  render: function () {
    return (
        <tr>
        <td>Product Name</td>
        <td>SKU Number</td>
        <td>Expiry Date</td>
      </tr>
    )
  }
})

module.exports = batchRecordRow
