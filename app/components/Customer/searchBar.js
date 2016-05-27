var React = require('react')
import AppActions from '../../actions/app-actions'
var searchBarButton = require('./searchBar-button')

// Takes in an input queryBatchNumber
// Rewrite this as stateless functional component and remove this comment
var searchBar = React.createClass({
  render: function () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Batch Number' value={this.props.queryBatchNumber}/>
        </form>
        <searchBarButton txt='Search' handler={AppActions.getBatchRecords.bind(null, this.props.queryBatchNumber)} />
      </div>
    )
  }
})

module.exports = searchBar
