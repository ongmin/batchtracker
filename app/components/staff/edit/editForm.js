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
      <span onClick={this.props.closeEditForm}><img className="cross" src="../../../images/cross.svg" /></span>
        <form onSubmit={this.handlePutSubmit}>
        <div className="editTextInput">
          <div className="editFormElement">
            <label for="edit-form-sku">SKU Number</label>
              <input
                className='edit-form-field'
                id='edit-form-sku'
                type='text'
                placeholder={this.props.skuNumber}
                value={this.state.editValueSKU}
                onChange={this.handleInputChangeSKU} />
            </div>
            <div className="editFormElement">
            <label for="edit-form-batch">Batch Number</label>
              <input
                className='edit-form-field'
                id='edit-form-batch'
                type='text'
                placeholder={this.props.batchNumber}
                value={this.state.editValueBatch}
                onChange={this.handleInputChangeBatch} />
            </div>
            <div className="editFormElement">
            <label for="edit-form-expiry-month">Expiry Month</label>


              <input
                className='edit-form-field'
                id='edit-form-expiry-month'
                type='number'
                placeholder={this.props.expiryMonth}
                value={this.state.editValueExpiryMonth}
                onChange={this.handleInputChangeExpiryMonth} />
            </div>
            <div className="editFormElement">
            <label for="edit-form-expiry-year">Expiry Year</label>

              <input
                className='edit-form-field'
                id='edit-form-expiry-year'
                type='number'
                placeholder={this.props.expiryYear}
                value={this.state.editValueExpiryYear}
                onChange={this.handleInputChangeExpiryYear} />
            </div>
          <input
            id='edit-form-batch-input-button'
            type='submit'
            value='Save'
            txt='Save' />
          </div>
        </form>
      </div>
    )
  }
})

module.exports = editForm
