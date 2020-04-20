import React, { useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from 'components/common/Button'

import { sendEmail } from 'api/email'
import { showSnackBar } from 'api/snackbar'

import './style.scss'

function GetInTouch(props) {
  const [messageValue, setMessageValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const emailRef = useRef(null)
  const nameRef = useRef(null)

  const handleShowSnackBar = (message) => {
    props.showSnackBar({
      open: true,
      message
    })
  }

  const handleClearFields = () => {
    setMessageValue('')
    setNameValue('')
    setEmailValue('')
  }

  const handleValidation = () => {
    const { current: email } = emailRef;
    const valid = {
      message: messageValue.length > 0,
      email: emailValue.length > 0 && email.validity.valid
    }

    if (!valid.message && emailValue.length === 0) {
      handleShowSnackBar('Fill in message and email address')
    } else if (!valid.message) {
      handleShowSnackBar('Fill in message')
    } else if (emailValue.length === 0) {
      handleShowSnackBar('Fill in email address')
    } else if (!email.validity.valid) {
      handleShowSnackBar('Email address in not valid')
    }

    return valid.message && valid.email
  }

  const handleSend = () => {
    if (handleValidation()) {
      const templateParams = {
        "name": nameValue.trim(),
        "message_body": messageValue.trim(),
        "to": emailValue.trim()
      }

      sendEmail(templateParams)
        .then((response) => {
          props.showSnackBar({
            open: true,
            message: 'Your message has been sent',
            type: 'success'
          })
          handleClearFields()
        }, (err) => {
          console.log('FAILED...', err);
        })
    }
  }

  return (
    <section className='landing-section'>
      <h1 className='hashIt-title'>
        Get In Touch
      </h1>

      <p className='features-small-text'>
        Please contact us regarding product early feedback and or cooperation request
      </p>

      <div className='getInTouch-block'>
        <TextareaAutosize
          className="getInTouch-area"
          placeholder="Message"
          value={messageValue}
          onChange={({ target }) => setMessageValue(target.value)}
        />
        <div>
          <input
            className='getInTouch-input'
            placeholder='Email Address'
            value={emailValue}
            onChange={({ target }) => setEmailValue(target.value)}
            type='text'
            ref={emailRef}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <input
            className='getInTouch-input'
            placeholder='Full Name'
            value={nameValue}
            onChange={({ target }) => setNameValue(target.value)}
            type='text'
            ref={nameRef}
            pattern="[A-Za-zА-Яа-яЇїІіЄєЁёҐґ\s]{3,60}"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </section>
  )
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    showSnackBar
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(GetInTouch));