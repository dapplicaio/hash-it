import React from 'react'

import './style.scss'

function Line({ width = '20%' }) {
  return (
    <div className='line-wrapper'>
      <div style={{ width }} className='line' />
    </div>
  )
}

export default Line