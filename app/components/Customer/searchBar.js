'use strict'
var React = require('react')

var searchBar = React.createClass({
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
      <div>
        <form className='search-bar' onSubmit={this.handleSubmit}>
          <input
            id='batchsearch-search-input'
            type='text'
            placeholder='Batch Number'
            value={this.state.queryBatchNumber}
            onChange={this.handleInputChange} />
          <input
            id='batchsearch-input-button'
            type='submit'
            value='Check'
            txt='Check' />
        </form>
      </div>
    )
  }
})

module.exports = searchBar
