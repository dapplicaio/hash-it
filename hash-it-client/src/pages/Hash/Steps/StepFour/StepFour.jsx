import React, { useEffect, useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from 'react-router'
import { withRouter } from "react-router-dom";

import Button from 'components/common/Button'
import Line from 'components/common/Line'

import { sendEmail } from 'api/email'

import './style.scss'

function StepFour(props) {
  const history = useHistory();
  const [send, setSend] = useState(true)
  const [notify, setNotify] = useState(false)
  const { userDataReducer, hashFileReducer, transactionReducer } = props;

  const handleSetStep = () => {
    props.firstStep()
  }

  const handleSendEmail = () => {
    const { fullName, email, valid, hash: userHash } = userDataReducer;
    const { name: fileName, hash: fileHash } = hashFileReducer;

    const data = {
      "name": valid ? fullName : undefined,
      "message_body": `
      <html>
        Your Data: <br/>
        Name: ${fullName} and Email: ${email} and their hash value: <b>${userHash ?? ''}</b><br/>
        Filename: ${fileName} and it’s hash: <b>${fileHash}</b><br/>
        TransactionID: ${transactionReducer?.transactionId}<br/>
        Link to transaction: https://bloks.io/transaction/${transactionReducer?.transactionId}<br/>    
      </html>`,
      "to": valid ? email : undefined
    }
    sendEmail(data)
      .then(() => {
        props.showSnackBar({
          open: true,
          message: 'Your message has been sent',
          type: 'success'
        })
        handleSetStep()
      })
  }

  useEffect(() => {
    const trxId = transactionReducer?.transactionId
    if (trxId) {
      history.push(`/hash/${trxId}`)
    }
  }, [history, transactionReducer])

  return (
    <section className='hash-steps stepFour'>
      <h1 className='hash-step-title'>Success</h1>
      <div className='hash-step-four'>
        <p>
          Your data are saved in transaction: {transactionReducer?.transactionId}. You can check it by visiting following
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href={`https://wax.bloks.io/transaction/${transactionReducer?.transactionId}`}
            target='_blank'
            rel="noopener noreferrer"
            className='hash-link'
          >
            link
          </a>.
        </p>

        <p>
          NOTE. This is free version of HashIT. We are working on more features, so you can join free premium beta<br />
        Features that coming soon:
      </p>
        <ul>
          <li>Version tracking, every time you update your document we keep track of version and save hash into blockchain.</li>
          <li>Limitless File size to upload</li>
          <li>Proposed Cloud Storage(password protected) to keep your original files in safe place</li>
          <li>Save in several blockchains, to keep hash data forever</li>
          <li>Keep all history of my hashes in my user profile</li>
        </ul>

        <div className='stepFour-checkboxes'>
          <div className='checkboxes-wrapper'>
            <Checkbox
            checked={send}
            onChange={({target}) => setSend(target.checked)}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
            <span>Please send me a copy of my transaction to my email</span>
          </div>

          <div className='checkboxes-wrapper'>
            <Checkbox
            checked={notify}
            onChange={({target}) => setNotify(target.checked)}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
            <span>Please notify me via email when more features are out</span>
          </div>
        </div>
      </div>

      <Line width="100%" />

      <div className='btns-container'>
        {
          userDataReducer.valid ?
          <Button onClick={handleSendEmail}>Send Email</Button>
          :
          <Button onClick={() => handleSetStep}>Start Again</Button>
        }
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    userDataReducer: state.userDataReducer,
    hashFileReducer: state.hashFileReducer,
    transactionReducer: state.transactionReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StepFour));