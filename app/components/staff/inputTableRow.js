var React = require('react')
import { Link } from 'react-router'
var EditForm = require('./edit/editForm')

// Displays single batchRecord details
// Rewrite this as stateless functional component and remove this comment

var inputTableRow = React.createClass({
  getInitialState: function () {
    return {
      isEditFormOpen: false
    }
  },
  handleDelete: function () {
    this.props.onDelete(this.props.id)
    console.log('deleted')
  },
  showEditForm: function () {
    this.setState({isEditFormOpen: true})
  },
  closeEditForm: function () {
    this.setState({isEditFormOpen: false})
  },
  render: function () {
    var expMonth = ''
    switch (this.props.expiryMonth) {
      case 1: expMonth = 'Jan'; break
      case 2: expMonth = 'Feb'; break
      case 3: expMonth = 'Mar'; break
      case 4: expMonth = 'Apr'; break
      case 5: expMonth = 'May'; break
      case 6: expMonth = 'Jun'; break
      case 7: expMonth = 'Jul'; break
      case 8: expMonth = 'Aug'; break
      case 9: expMonth = 'Sep'; break
      case 10: expMonth = 'Oct'; break
      case 11: expMonth = 'Nov'; break
      case 12: expMonth = 'Dec'; break
      default: expMonth = 'Year'
    }
    if(this.state.isEditFormOpen) {
      return (
          <div className="input-table-row">
            <span className='sku-number'>{this.props.skuNumber}</span>
            <span className='product-name'>{this.props.productName}</span>
            <span className='batch-number'>{this.props.batchNumber}</span>
            <span className='expiry-date'> {expMonth} / {this.props.expiryYear}</span>
            <span className='input-row-edit' onClick={this.showHideEditForm}>edit</span>
            <span className='input-row-delete' onClick={this.handleDelete}>delete</span>
            <EditForm
              batchNumber={this.props.batchNumber}
              productName={this.props.productName}
              skuNumber={this.props.skuNumber}
              expiryMonth={this.props.expiryMonth}
              expiryYear={this.props.expiryYear}
              id={this.props.id}
              onPutSubmit={this.props.onUpdate}
              closeEditForm={this.closeEditForm}
              />
          </div>
      )
    }
    else {
      return (
          <div className="input-table-row">
            <span className='sku-number'>{this.props.skuNumber}</span>
            <span className='product-name'>{this.props.productName}</span>
            <span className='batch-number'>{this.props.batchNumber}</span>
            <span className='expiry-date'> {expMonth} / {this.props.expiryYear}</span>
            <span className='input-row-edit' onClick={this.showEditForm}>edit</span>
            <span className='input-row-delete' onClick={this.handleDelete}>delete</span>
          </div>
      )
    }

  }
})

module.exports = inputTableRow
