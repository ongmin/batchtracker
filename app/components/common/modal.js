var React = require('react')
import { Link } from 'react-router'

const modal = React.createClass({
  styles: {
    position: 'fixed',
    top: '30%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    padding: 20,
    boxShadow: '30px 18px 160px -5px rgba(150, 150, 150, 0.5)',
    overflow: 'auto',
    background: '#fff'
  },

  render() {
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
})

module.exports = modal
