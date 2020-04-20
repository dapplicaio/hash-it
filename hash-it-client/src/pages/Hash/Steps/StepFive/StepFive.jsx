import React, { useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import Button from 'components/common/Button'
import Line from 'components/common/Line'

import './style.scss'

function StepFive(props) {
  // eslint-disable-next-line no-unused-vars
  let areaRef = useRef(null)

  return (
    <section className='hash-steps stepFive'>
      <h1 className='hash-step-title'>
        You are #123 in a list for free 3 months premium beta access.<br />
        Refer a friend to get higher into the list
      </h1>

      <div className='hash-emails-group'>
        <span>Emails of friends(type via comma)</span>
        <TextareaAutosize
          placeholder="Email Address"
          inputRef={(ref => areaRef = ref)} />
      </div>

      <p className='stepFive-share'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        Or share via this <a href="#" className='hash-link'>Link</a>
      </p>

      <div className='hash-social-buttons'>
        <div className='hash-social-btn'>Facebook</div>
        <div className='hash-social-btn'>Twitter</div>
      </div>

     <div className='stepFive-line-wrapper'>
     <Line />
     </div>

      <Button onClick={() => props.firstStep()}>
        Start New Hash
      </Button>

    </section>
  )
}

export default StepFive