'use strict'
import React from 'react'

const batchNumberGuide = React.createClass({
  render () {
    return (
      <div className='how-to-guide'>
      <h1>Where can I find the Batch Code?</h1>
        <p>The batch code can be found at the crimp of the tube or at the bottom of the bottle.</p>
        <div className='batch-code-images'>
          <img src='../../images/01guide.jpg' />
          <img src='../../images/02guide.jpg' />
          <img src='../../images/03guide.jpg' />
        </div>
      </div>
    )
  }
})

module.exports = batchNumberGuide
