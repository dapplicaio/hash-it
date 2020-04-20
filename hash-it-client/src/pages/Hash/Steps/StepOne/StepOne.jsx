import React, { useRef, useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
import Checkbox from '@material-ui/core/Checkbox';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from 'react-router'
import { withRouter } from "react-router-dom";

import Button from 'components/common/Button'
import Input from 'components/common/Input'
import Line from 'components/common/Line'

import { hashUserDataAction } from 'api/hash'
import { showSnackBar } from 'api/snackbar'

import './style.scss'

function StepOne(props) {
  const [check, setCheck] = useState(false)
  const history = useHistory();
  const { userDataReducer, isActive } = props
  const emailRef = useRef(null)
  const nameRef = useRef(null)

  const handleSetStep = () => {
    if (!check && hangleChecValidation()) {
      props.nextStep()

    } else if (check) {
      props.nextStep()
    } else {
      props.showSnackBar({
        open: true,
        message: 'Fill the fields or mark SKIP'
      })
    }
  }

  const handleChange = () => {
    if (hangleChecValidation()) {
      const data = {
        fullName: nameRef.current.value.trim(),
        email: emailRef.current.value.trim(),
      }
      const hash = CryptoJS.MD5(JSON.stringify(data)).toString();
      props.hashUserDataAction({
        ...data,
        hash,
        valid: true,
      })

    } else {
      props.hashUserDataAction({
        fullName: undefined,
        email: undefined,
        hash: undefined,
        valid: false,
      })
    }
  }

  const hangleChecValidation = () => {
    const { current: fullName } = nameRef
    const { current: email } = emailRef
    let [fullNameValid, emailValid] = [false, false]

    if (fullName.value.length > 0 && fullName.validity.valid) {
      fullNameValid = true
    } else {
      fullNameValid = false
    }

    if (email.value.length > 0 && email.validity.valid) {
      emailValid = true
    } else {
      emailValid = false
    }

    return fullNameValid && emailValid
  }

  useEffect(() => {
    if (isActive) {
      history.push(`/hash/`)
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isActive])

  return (
    <section className='hash-steps'>
      <h1 className='hash-step-title'>Step1. Please enter your data</h1>
      <div className='stepOne-form'>
        <Input
          type='text'
          placeholder='First and Last Name'
          refs={nameRef}
          pattern="[A-Za-zА-Яа-яЇїІіЄєЁёҐґ\s]{3,60}"
          onChange={handleChange}
        />
        <Input
          type='text'
          placeholder='Email Address'
          refs={emailRef}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={handleChange}
        />

        <div className='stepOne-skip'>
          <Checkbox
            checked={check}
            onChange={({target}) => setCheck(target.checked)}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <span>SKIP (I dont want to save my personal hashed data into blockchain)</span>
        </div>
      </div>

      <Line />

      {
        userDataReducer.hash && <p>Hash to be saved in blockchain: <strong>{userDataReducer.hash}</strong></p>
      }

      <div className='btns-container'>
        <Button onClick={handleSetStep}>Next</Button>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    userDataReducer: state.userDataReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    hashUserDataAction,
    showSnackBar
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StepOne));