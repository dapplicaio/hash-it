import React from 'react'
import Dropzone from 'react-dropzone'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import Button from 'components/common/Button'
import Line from 'components/common/Line'

import { hashFileAction } from 'api/hash'
import { showSnackBar } from 'api/snackbar'

import { calculateHashMd5 } from 'helpers'

import icon from 'assets/images/dragAndDrop.jpg'

import './style.scss'

function StepTwo(props) {
  const { hashFileReducer, showSnackBar } = props

  const setFileToHash = (file) => {
    const CONVERT_TO_MB = ({ size }) => size / (1000 * 1000)
    if (CONVERT_TO_MB(file) <= 100) {
      const setHashToReducer = (hash) => props.hashFileAction({ name: file?.name, hash })
      calculateHashMd5(file, setHashToReducer)
    } else {
      showSnackBar({
        open: true,
        message: "Uploaded file is too big"
      })
    }
  }

  const handleSetStep = () => {
    props.nextStep()
  }

  const handleNextStep = () => {
    if (hashFileReducer?.hash) {
      handleSetStep()
    } else {
      showSnackBar({
        open: true,
        message: "Upload file"
      })
    }
  }

  return (
    <section className='hash-steps'>
      <h1 className='hash-step-title'>Step2. Please upload file to make a hash</h1>

      <Dropzone onDrop={acceptedFiles => setFileToHash(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} className='hash-dragAndDrop'>
              <input {...getInputProps()} />
              <img src={icon} alt='' />
              {
                hashFileReducer.hash ?
                  <p>
                    You uploaded file {hashFileReducer.name}
                  </p>
                  :
                  <p>
                    Please Drag&Drop file here or Upload by Clicking Icon. File upload is limited by 100MB
                </p>
              }
            </div>
          </section>
        )}
      </Dropzone>
      <p>
        NOTE.  We are not storing your file on our end. It is your responsibility to keep the original file unchanged and stored in a safe place
      </p>

      <Line />
      {
        hashFileReducer.hash && <p>Hash to be saved in blockchain: <strong>{hashFileReducer.hash}</strong></p>
      }


      <div className='btns-container'>
        <Button onClick={handleNextStep}>Next</Button>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    hashFileReducer: state.hashFileReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    hashFileAction,
    showSnackBar
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StepTwo));