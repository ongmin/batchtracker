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
        var updatedBatchRecords = this.state.batchRecords
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
  handlePostSubmit: function (obj) {
    this.setState({ skuNumber: obj['skuNumber'],
                    batchNumber: obj['batchNumber'],
                    expiryMonth: obj['month'],
                    expiryYear: obj['year'] },
      function () {
        $.ajax({
          url: batchRecordsEndpoint,
          dataType: 'json',
          type: 'POST',
          cache: false,
          data: obj,
          success: function (data) {
            this.setState({batchRecords: data})
          }.bind(this),
          error: function (xhr, status, err) {
            console.error(batchRecordsEndpoint, status, err.toString())
          }
        })
      })
  },
  handleDelete: function (id) {
    $.ajax({
      url: batchRecordsEndpoint + id,
      dataType: 'json',
      type: 'DELETE',
      cache: false,
      success: function (data) {
        this.setState({batchRecords: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(batchRecordsEndpoint + id, status, err.toString())
      }
    })
  },
  handleUpdate: function (obj) {
    console.log(obj.id)
    $.ajax({
      url: batchRecordsEndpoint + obj.id,
      dataType: 'json',
      type: 'PUT',
      cache: false,
      data: obj,
      success: function (data) {
        this.setState({batchRecords: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(batchRecordsEndpoint + obj.id, status, err.toString())
      }
    })
  },
  render: function () {
    const form = this.props.form

    return (
            <div>
              <InputForm
                  value={this.state.queryBatchNumber}
                  onChange={this.handleInputChange}
                  onPostSubmit={this.handlePostSubmit}
                />
              <InputTable
                batchRecords={this.state.batchRecords}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
              />
            </div>
  ) }
})

module.exports = inputView
