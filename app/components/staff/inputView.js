var React = require('react')
var InputForm = require('./inputForm')
var InputTableHeader = require('./inputTableHeader')
var InputTable = require('./inputTable')
var InputFormMatchingProduct = require('./InputFormMatchingProduct')

var batchRecordsEndpoint = '/api/batchrecords/'
var batchRecordsProtectedEndpoint = '/api/protected/batchrecords/'
import Pagination from "react-js-pagination";

var inputView = React.createClass({
  getInitialState: function () {
    return {
      queryBatchNumber: '',
      batchRecords: [],
      activePage: 1,
      recordStatus: []
    }
  },
  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
     console.log(`active page is ${pageNumber}`);
   },
  loadDataFromServer: function () {
    $.ajax({
      beforeSend: function(xhr) {
         if (localStorage.getItem('userToken')) {
           xhr.setRequestHeader('Authorization',
                 'Bearer ' + localStorage.getItem('userToken'));
         }
       },
      url: batchRecordsEndpoint + this.state.queryBatchNumber,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function (data) {
        var updatedBatchRecords = this.state.batchRecords
        this.setState({batchRecords: data.reverse()})
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
    // this.setState({queryBatchNumber: e.target.value})
    this.setState({recordStatus: []})
  },
  handlePostSubmit: function (obj) {
    this.setState({ skuNumber: obj['skuNumber'],
                    batchNumber: obj['batchNumber'],
                    expiryMonth: obj['month'],
                    expiryYear: obj['year'] },
      function () {
        $.ajax({
          beforeSend: function(xhr) {
             if (localStorage.getItem('userToken')) {
               xhr.setRequestHeader('Authorization',
                     'Bearer ' + localStorage.getItem('userToken'));
             }
           },
          url: batchRecordsProtectedEndpoint,
          dataType: 'json',
          type: 'POST',
          cache: false,
          data: obj,
          success: function (data) {
            this.setState({batchRecords: data.reverse()})
            this.setState({recordStatus: ["Record Successfully Submitted"]})
          }.bind(this),
          error: function (xhr, status, err) {
            var inputErrors = ''
            if(xhr.responseText[0] === '[') {
              inputErrors = JSON.parse(xhr.responseText)
            }
            else {
              inputErrors = [xhr.responseText]
            }
            this.setState({recordStatus: inputErrors})
          }.bind(this)
        })
      })
  },
  handleDelete: function (id) {
    $.ajax({
      beforeSend: function(xhr) {
         if (localStorage.getItem('userToken')) {
           xhr.setRequestHeader('Authorization',
                 'Bearer ' + localStorage.getItem('userToken'));
         }
       },
      url: batchRecordsProtectedEndpoint + id,
      dataType: 'json',
      type: 'DELETE',
      cache: false,
      success: function (data) {
        this.setState({batchRecords: data.reverse()})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(batchRecordsEndpoint + id, status, err.toString())
      }
    })
  },
  handleUpdate: function (obj) {
    $.ajax({
      beforeSend: function(xhr) {
         if (localStorage.getItem('userToken')) {
           xhr.setRequestHeader('Authorization',
                 'Bearer ' + localStorage.getItem('userToken'));
         }
       },
      url: batchRecordsProtectedEndpoint + obj.id,
      dataType: 'json',
      type: 'PUT',
      cache: false,
      data: obj,
      success: function (data) {
        this.setState({batchRecords: data.reverse()})
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
          var inputErrors = ''
          if(xhr.responseText[0] === '[') {
            inputErrors = JSON.parse(xhr.responseText)
          }
          else {
            inputErrors = [xhr.responseText]
          }
          this.setState({recordStatus: inputErrors})
      }.bind(this)
    })
  },
  render: function () {
    // const form = this.props.form
    return (
            <div>
              <InputForm
                  value={this.state.queryBatchNumber}
                  onChange={this.handleInputChange}
                  onPostSubmit={this.handlePostSubmit}
                  onInputChange={this.handleInputChange}
                  recordStatus={this.state.recordStatus}
                />
              <InputTable
                batchRecords={this.state.batchRecords.slice(2 * (this.state.activePage-1), 2 * this.state.activePage )}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
              />
              <Pagination
                 activePage={this.state.activePage}
                 totalItemsCount={this.state.batchRecords.length}
                 itemsCountPerPage={2}
                 onChange={this.handlePageChange}
               />
            </div>
  ) }
})

module.exports = inputView
