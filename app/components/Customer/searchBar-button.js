var React = require('react')

// Stateless functional component
export default (props) => {
  return (
    <button
      onClick={props.handler}>
      { props.txt }
    </button>
  )
}

// props.txt "Search"
