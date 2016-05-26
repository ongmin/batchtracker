var React = require('react')
var SearchBar = require('./searchBar')
var BatchRecordsTableHeader = require('./batchRecordsTableHeader')
var BatchRecordsTable = require('./batchRecordsTable')

// State lives in filterableBatchRecordsTable component
// Client inserts queryId into searchBar and hits searchBar-button
// Action makes request to server and receives results
// Dispatcher dispatches a function with results payload to whoever is interseted
// Store's state changes due to new result received by the action
// The View re-renders by listening to Store's change

var filterableBatchRecordsTable = React.createClass({
  render: function () {
    return (
            <div>
              <searchBar />
              <BatchRecordsTableHeader />
              <BatchRecordsTable batchRecords={this.state.batchRecords}/>
            </div>
          ) },
    getInitialState: function() {
      return {
        queryId: '',
        batchRecords: []
      }
    }

})

module.exports = filterableBatchRecordsTable
