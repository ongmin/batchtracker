var React = require('react')

// Search button which getsBatchRecords when clicked
// Stateless functional component

export default (props) => {
  return (
    <button
      onClick={props.handler}>
      { props.txt }
    </button>
  )
}
