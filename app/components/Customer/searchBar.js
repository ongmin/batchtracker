var React = require('react')
// import AppActions from '../../actions/app-actions'
// var SearchBarButton = require('./searchBarButton')

// Takes in an input queryBatchNumber
// Rewrite this as stateless functional component and remove this comment
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
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Batch Number'
            value={this.state.queryBatchNumber}
            onChange={this.handleInputChange} />
          <div>'value' + {this.state.queryBatchNumber}</div>
          <input
            type='submit'
            value='post'
            txt='Search' />
        </form>
      </div>
    )
  }
})

module.exports = searchBar
