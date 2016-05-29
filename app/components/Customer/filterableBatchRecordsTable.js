var React = require('react')
var SearchBar = require('./searchBar')
var BatchRecordsTableHeader = require('./batchRecordsTableHeader')
var BatchRecordsTable = require('./batchRecordsTable')

// State lives in filterableBatchRecordsTable component
// Customer inputs queryBatchNumber into searchBar and hits searchBar-button
// Action makes request to server and receives results
// Dispatcher dispatches a function with results payload to whoever is interseted
// Store's state changes due to new result received by the action
// The View re-renders by listening to Store's change

var batchRecordsEndpoint = '/api/batchrecords/'

var filterableBatchRecordsTable = React.createClass({
  getInitialState: function () {
    return {
      queryBatchNumber: '',
      batchRecords: []
    }
  },
  loadDataFromServer: function () {
    $.ajax({
      url: batchRecordsEndpoint + this.state.queryBatchNumber,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function (data) {
        console.log(data)
        this.setState({batchRecords: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(batchRecordsEndpoint, status, err.toString())
      }
    })
  },
  componentDidMount: function () {
    this.loadDataFromServer()
  },
  handleInputChange: function (e) {
    this.setState({queryBatchNumber: e.target.value})
  },
  handleQuerySubmit: function (obj) {
    console.log(obj)

    this.setState({ queryBatchNumber: obj["queryBatchNumber"] }, function () {
      $.ajax({
        url: batchRecordsEndpoint + this.state.queryBatchNumber,
        dataType: 'json',
        type: 'GET',
        cache: false,
        success: function (data) {
          console.log(data)
          this.setState({batchRecords: data})
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(batchRecordsEndpoint, status, err.toString())
        }
      })
    })
  },
  render: function () {
    return (
            <div>
              <SearchBar
                value={this.state.queryBatchNumber}
                onChange={this.handleInputChange}
                onQuerySubmit={this.handleQuerySubmit} />
              <div>'Test-Parent ' + {this.state.queryBatchNumber} </div>
              <BatchRecordsTableHeader
                queryBatchNumber={this.state.queryBatchNumber} />
              <BatchRecordsTable
                batchRecords={this.state.batchRecords} />
            </div>
  ) }
})

module.exports = filterableBatchRecordsTable
