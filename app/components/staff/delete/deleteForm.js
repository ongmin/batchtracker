var React = require('react')

var deleteForm = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Are you sure you want to delete this record?</h1>
      </div>
    )
  }
})

module.exports = deleteForm
