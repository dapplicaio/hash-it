import React, { useState } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from 'components/common/Button'
import Line from 'components/common/Line'

import { sendHashAPI } from 'api/sendData'

import './style.scss'

function StepThree(props) {
  const [disable, setDisable] = useState(false)
  const { userDataReducer, hashFileReducer } = props;

  const handleSetStep = () => {
    props.nextStep()
  }

  const handleRestart = () => {
    props.firstStep();
  }

  const handleSaveHash = () => {
    const data = {
      UserHash: userDataReducer?.hash,
      DocumentHash: hashFileReducer?.hash
    }
    setDisable(true)
    props.sendHashAPI(data, handleSetStep, () => setDisable(false))
  }

  return (
    <section className='hash-steps'>
      <h1 className='hash-step-title'>Step3. Please verify your data</h1>
      <div>
        {
          userDataReducer.hash ?
            <>
              <p>
                {`User Data: ${userDataReducer.fullName}, ${userDataReducer.email}`}
              </p>
              <p className='data-with-hash'>
                Hash to be saved in blockchain: <strong>{userDataReducer.hash}</strong>
              </p>
            </>
            : null
        }

        {
          hashFileReducer.hash ?
            <>
              <p>
                File Uploaded: {hashFileReducer.name}
              </p>
              <p className='data-with-hash'>
                Hash to be saved in blockchain: <strong>{hashFileReducer.hash}</strong>
              </p>
            </>
            : null
        }
      </div>

      <Line />

      <div className='btns-container'>
        <Button onClick={handleRestart}>Re-Start</Button>
        <Button onClick={handleSaveHash} disabled={disable}>Save</Button>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    userDataReducer: state.userDataReducer,
    hashFileReducer: state.hashFileReducer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    sendHashAPI
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StepThree));