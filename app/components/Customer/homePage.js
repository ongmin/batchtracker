var React = require('react')
var SearchBar = require('./searchBar')
var FilterableBatchRecordsTable = require('./filterableBatchRecordsTable')
// var BatchRecordsTable = require('./batchRecordsTable')
import { Link } from 'react-router'
var batchRecordsEndpoint = '/api/batchrecords/'

var homePage = React.createClass({
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
    this.setState({ queryBatchNumber: obj['queryBatchNumber'] }, function () {
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
              <div id='container-search'>
                <div className='container-search-inner'>
                  <SearchBar
                    value={this.state.queryBatchNumber}
                    onChange={this.handleInputChange}
                    onQuerySubmit={this.handleQuerySubmit} />
                    <Link to={{
                        pathname: `/guide`,
                        state: { modal: true, returnTo: this.props.location.pathname }
                      }}
                    ><div id='container-search-whereto'><div id='qmark'>?</div>Where do I find the Batch code?</div>
                    </Link>
                </div>
              </div>
              <FilterableBatchRecordsTable
                queryBatchNumber={this.state.queryBatchNumber}
                batchRecords={this.state.batchRecords} />
            </div>
  ) }
})

module.exports = homePage
// filterableBatchRecordsTable
