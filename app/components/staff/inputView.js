import React from 'react'
import InputForm from './inputForm'
import InputTable from './inputTable'
import Pagination from 'react-js-pagination'

var batchRecordsEndpoint = '/api/batchrecords/'
var batchRecordsProtectedEndpoint = '/api/protected/batchrecords/'

var inputView = React.createClass({
  propTypes: {
    recordsPerPage: React.PropTypes.number
  },
  getDefaultProps: function () {
    return {
      recordsPerPage: 8
    }
  },
  getInitialState: function () {
    return {
      queryBatchNumber: '',
      batchRecords: [],
      activePage: 1,
      recordStatus: []
    }
  },
  handlePageChange (pageNumber) {
    this.setState({ activePage: pageNumber })
  },
  loadDataFromServer: function () {
    $.ajax({
      beforeSend: function (xhr) {
        if (window.localStorage.getItem('userToken')) {
          xhr.setRequestHeader('Authorization',
          'Bearer ' + window.localStorage.getItem('userToken'))
        }
      },
      url: batchRecordsEndpoint + this.state.queryBatchNumber,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function (data) {
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
          beforeSend: function (xhr) {
            if (window.localStorage.getItem('userToken')) {
              xhr.setRequestHeader('Authorization',
              'Bearer ' + window.localStorage.getItem('userToken'))
            }
          },
          url: batchRecordsProtectedEndpoint,
          dataType: 'json',
          type: 'POST',
          cache: false,
          data: obj,
          success: function (data) {
            this.setState({batchRecords: data.reverse()})
            this.setState({recordStatus: ['Record Successfully Submitted']})
          }.bind(this),
          error: function (xhr, status, err) {
            var inputErrors = ''
            if (xhr.responseText[0] === '[') {
              inputErrors = JSON.parse(xhr.responseText)
            } else {
              inputErrors = [xhr.responseText]
            }
            this.setState({recordStatus: inputErrors})
          }.bind(this)
        })
      })
  },
  handleDelete: function (id) {
    $.ajax({
      beforeSend: function (xhr) {
        if (window.localStorage.getItem('userToken')) {
          xhr.setRequestHeader('Authorization',
          'Bearer ' + window.localStorage.getItem('userToken'))
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
      beforeSend: function (xhr) {
        if (window.localStorage.getItem('userToken')) {
          xhr.setRequestHeader('Authorization',
          'Bearer ' + window.localStorage.getItem('userToken'))
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
        if (xhr.responseText[0] === '[') {
          inputErrors = JSON.parse(xhr.responseText)
        } else {
          inputErrors = [xhr.responseText]
        }
        this.setState({recordStatus: inputErrors})
      }.bind(this)
    })
  },
  render: function () {
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
                batchRecords={this.state.batchRecords.slice(this.props.recordsPerPage * (this.state.activePage - 1), this.props.recordsPerPage * this.state.activePage)}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
              />
              <Pagination
                 activePage={this.state.activePage}
                 totalItemsCount={this.state.batchRecords.length}
                 itemsCountPerPage={this.props.recordsPerPage}
                 onChange={this.handlePageChange}
               />
            </div>
  ) }
})

module.exports = inputView
