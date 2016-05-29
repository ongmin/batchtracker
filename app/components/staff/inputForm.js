var React = require('react')
// import AppActions from '../../actions/app-actions'
// var SearchBarButton = require('./searchBarButton')

// Takes in an input queryBatchNumber
// Rewrite this as stateless functional component and remove this comment
var inputForm = React.createClass({
  propTypes: {
    onQuerySubmit: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {queryBatchNumber: ''}
  },

  handleInputChange: function (e) {
    this.setState({queryBatchNumber: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    this.setState({queryBatchNumber: this.state.queryBatchNumber})

    var queryBatchNumber = this.state.queryBatchNumber
    if (!queryBatchNumber) {
      return
    }
    this.props.onQuerySubmit({queryBatchNumber: queryBatchNumber})
    this.setState({queryBatchNumber: ''})
  },
  render: function () {
    return (
      <div id='container-input-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='input-form-field'
            id='input-form-sku'
            type='text'
            placeholder='SKU Number'
            value={this.state.inputValueSKU}
            onChange={this.handleInputChange} />
            <input
              className='input-form-field'
              id='input-form-batch'
              type='text'
              placeholder='Batch Number'
              value={this.state.inputValueBatch}
              onChange={this.handleInputChange} />
            <input
              className='input-form-field'
              id='input-form-expiry-month'
              type='number'
              placeholder='Expiry Month (eg. 08 for August)'
              value={this.state.inputValueExpiryMonth}
              onChange={this.handleInputChange} />
            <input
              className='input-form-field'
              id='input-form-expiry-year'
              type='number'
              placeholder='Expiry Year (eg. 2016)'
              value={this.state.inputValueExpiryYear}
              onChange={this.handleInputChange} />
          <input
            id='input-form-batch-input-button'
            type='submit'
            value='Search'
            txt='Search' />
          <div>'value' + {this.state.queryBatchNumber}</div>
        </form>
      </div>
    )
  }
})

module.exports = inputForm
