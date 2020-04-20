import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'components/common/Button'
import Line from 'components/common/Line'

import './style.scss'

function PreLastBlock() {
  return (
    <section className='landing-section pre-last-block'>
      <h1 className='hashIt-title'>
        With our app you will be able to keep a record of your creatives saved at HashIT
      </h1>

      <p className='hashIt-text'>
        You can save any content here, so this hash is proof by timestamp and hashed content that you are the first person that owned it.
      </p>

      <Line />

      <div className='last-btn-wrapper'>
        <NavLink to='/hash'>
          <Button>Start now</Button>
        </NavLink>
      </div>
    </section>
  )
}

export default PreLastBlock