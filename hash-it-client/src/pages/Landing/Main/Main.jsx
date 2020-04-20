import React from 'react'
import { NavLink } from 'react-router-dom'

import Line from 'components/common/Line'
import Button from 'components/common/Button'

import './style.scss'

function Main() {
  return (
    <section className='landing-main'>
      <h1 className='hashIt-title'>
        HashIT - free and fast way to protect your creatives
      </h1>

      <p className='hashIt-text'>
        HashIT utilises power of blockchain in a way that you store a hash code of your creatives forever as a proof of authorship. No registration required
      </p>

      <Line />
      <div className='landing-start'>
        <NavLink to='/hash'>
          <Button>Start now</Button>
        </NavLink>
      </div>
    </section>
  )
}

export default Main