var React = require('react')
import AppActions from '../../actions/app-actions'
var searchBarButton = require('./searchBar-button')


var searchBar = React.createClass({
  render: function () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Batch Number' />
        </form>
        <searchBarButton handler={AppActions.getBatchRecords.bind(null, props.item )} />
      </div>
    )
  }
})

module.exports = searchBar
