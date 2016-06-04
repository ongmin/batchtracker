var React = require('react')
// Takes in an input queryBatchNumber

var inputForm = React.createClass({
  propTypes: {
    onPostSubmit: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      queryBatchNumber: '',
      inputValueSKU: '',
      inputValueBatch: '',
      inputValueExpiryMonth: '',
      inputValueExpiryYear: ''
    }
  },

  handleInputChangeSKU: function (e) {
    this.setState({inputValueSKU: e.target.value})
  },
  handleInputChangeBatch: function (e) {
    this.setState({inputValueBatch: e.target.value})
  },
  handleInputChangeExpiryMonth: function (e) {
    this.setState({inputValueExpiryMonth: e.target.value})
  },
  handleInputChangeExpiryYear: function (e) {
    this.setState({inputValueExpiryYear: e.target.value})
  },
  handlePostSubmit: function (e) {
    e.preventDefault()
    var skuNumber = this.state.inputValueSKU
    var batchNumber = this.state.inputValueBatch
    var expiryMonth = this.state.inputValueExpiryMonth
    var expiryYear = this.state.inputValueExpiryYear

    if (!skuNumber || !batchNumber || !expiryMonth || !expiryYear) {
      return
    }

    this.props.onPostSubmit({ skuNumber: skuNumber, batchNumber: batchNumber, month: expiryMonth, year: expiryYear })
    this.setState({inputValueSKU: '', inputValueBatch: '', inputValueExpiryMonth: '', inputValueExpiryYear: ''})
  },
  render: function () {
    return (
      <div id='container-input-form'>
        <form onSubmit={this.handlePostSubmit}>
          <input
            className='input-form-field'
            id='input-form-sku'
            type='text'
            placeholder='SKU Number'
            value={this.state.inputValueSKU}
            onChange={this.handleInputChangeSKU} />
            <input
              className='input-form-field'
              id='input-form-batch'
              type='text'
              placeholder='Batch Number'
              value={this.state.inputValueBatch}
              onChange={this.handleInputChangeBatch} />
            <input
              className='input-form-field'
              id='input-form-expiry-month'
              type='number'
              placeholder='Expiry Month (eg. 08 for August)'
              value={this.state.inputValueExpiryMonth}
              onChange={this.handleInputChangeExpiryMonth} />
            <input
              className='input-form-field'
              id='input-form-expiry-year'
              type='number'
              placeholder='Expiry Year (eg. 2016)'
              value={this.state.inputValueExpiryYear}
              onChange={this.handleInputChangeExpiryYear} />
          <input
            id='input-form-batch-input-button'
            type='submit'
            value='Post'
            txt='Submit' />
          <div>'value' + {this.state.queryBatchNumber}</div>
        </form>
      </div>
    )
  }
})

module.exports = inputForm
