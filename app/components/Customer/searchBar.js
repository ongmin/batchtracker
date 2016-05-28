var React = require('react')
// import AppActions from '../../actions/app-actions'
var SearchBarButton = require('./searchBarButton')

// Takes in an input queryBatchNumber
// Rewrite this as stateless functional component and remove this comment
var searchBar = React.createClass({
  getInitialState: function () {
    return {queryBatchNumber: ''}
  },
  handleInputChange: function (e) {
    this.setState({queryBatchNumber: e.target.value})
  },
  render: function () {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Batch Number'
            value={this.state.queryBatchNumber}
            onChange={this.handleInputChange} />
        </form>
        <SearchBarButton txt='Search'/>
      </div>
    )
  }
})

module.exports = searchBar
