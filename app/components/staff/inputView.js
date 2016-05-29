var React = require('react')
var InputForm = require('./inputForm')
var InputTableHeader = require('./inputTableHeader')
var InputTable = require('./inputTable')
var InputFormMatchingProduct = require('./InputFormMatchingProduct')

var batchRecordsEndpoint = '/api/batchrecords/'

var inputView = React.createClass({
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
    this.setState({ queryBatchNumber: this.state.queryBatchNumber }, function () {
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
  handleInputSubmit: function (obj) {
    this.setState({ queryBatchNumber: '21686A' }, function () {
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
              <InputForm
                value={this.state.queryBatchNumber}
                onChange={this.handleInputChange}
                onQuerySubmit={this.handleQuerySubmit} />
              <InputFormMatchingProduct />
              <InputTableHeader
                queryBatchNumber={this.state.queryBatchNumber} />
              <InputTable
                batchRecords={this.state.batchRecords} />
            </div>
  ) }
})

module.exports = inputView
