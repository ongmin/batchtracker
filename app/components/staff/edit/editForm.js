var React = require('react')

var editForm = React.createClass({
  getInitialState: function () {
    return {
      editValueSKU: this.props.skuNumber,
      editValueBatch: this.props.batchNumber,
      editValueExpiryMonth: this.props.expiryMonth,
      editValueExpiryYear: this.props.expiryYear
    }
  },

  handleInputChangeSKU: function (e) {
    this.setState({editValueSKU: e.target.value})
  },
  handleInputChangeBatch: function (e) {
    this.setState({editValueBatch: e.target.value})
  },
  handleInputChangeExpiryMonth: function (e) {
    this.setState({editValueExpiryMonth: e.target.value})
  },
  handleInputChangeExpiryYear: function (e) {
    this.setState({editValueExpiryYear: e.target.value})
  },
  handlePutSubmit: function (e) {
    e.preventDefault()
    var skuNumber = this.state.editValueSKU
    var batchNumber = this.state.editValueBatch
    var expiryMonth = this.state.editValueExpiryMonth
    var expiryYear = this.state.editValueExpiryYear

    if (!skuNumber || !batchNumber || !expiryMonth || !expiryYear) {
      return
    }

    this.props.onPutSubmit({ skuNumber: skuNumber, batchNumber: batchNumber, month: expiryMonth, year: expiryYear, id: this.props.id})
    this.setState({editValueSKU: skuNumber, editValueBatch: batchNumber, editValueExpiryMonth: expiryMonth, editValueExpiryYear: expiryYear})
  },
  render: function () {
    return (
      <div id='container-edit-form'>
        <form onSubmit={this.handlePutSubmit}>
          <input
            className='edit-form-field'
            id='edit-form-sku'
            type='text'
            placeholder={this.props.skuNumber}
            value={this.state.editValueSKU}
            onChange={this.handleInputChangeSKU} />
            <input
              className='edit-form-field'
              id='edit-form-batch'
              type='text'
              placeholder={this.props.batchNumber}
              value={this.state.editValueBatch}
              onChange={this.handleInputChangeBatch} />
            <input
              className='edit-form-field'
              id='edit-form-expiry-month'
              type='number'
              placeholder={this.props.expiryMonth}
              value={this.state.editValueExpiryMonth}
              onChange={this.handleInputChangeExpiryMonth} />
            <input
              className='edit-form-field'
              id='edit-form-expiry-year'
              type='number'
              placeholder={this.props.expiryYear}
              value={this.state.editValueExpiryYear}
              onChange={this.handleInputChangeExpiryYear} />
          <input
            id='edit-form-batch-input-button'
            type='submit'
            value='Put'
            txt='Save' />
        </form>
      </div>
    )
  }
})

module.exports = editForm
