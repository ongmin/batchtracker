import React from 'react'
import SearchBar from './searchBar'
import FilterableBatchRecordsTable from './filterableBatchRecordsTable'
import { Link } from 'react-router'
import ReactDOM from 'react-dom'

var batchRecordsEndpoint = '/api/batchrecords/'

var homePage = React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
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
          ReactDOM.render(
            <FilterableBatchRecordsTable
              queryBatchNumber={this.state.queryBatchNumber}
              batchRecords={this.state.batchRecords} />,
                      document.getElementById('query-results'))
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
                    }}>
                    <div className='container-search-whereto' id='container-search-whereto-desktop'>
                      <div className='qmark'>?</div>Where do I find the Batch code?
                    </div>
                    </Link>
                    <a href='http://faq.paulaschoice.sg/product-expiry-date-checker/' title='Batch Code Guide' target='_blank'>
                      <div className='container-search-whereto' id='container-search-whereto-mobile'>
                        <div className='qmark'>?</div>Where do I find the Batch code?
                      </div>
                    </a>
                </div>
              </div>
              <div id='query-results'></div>
            </div>
  ) }
})

module.exports = homePage
