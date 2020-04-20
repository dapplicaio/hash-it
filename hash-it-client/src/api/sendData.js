import axios from 'axios';

import * as URLS from 'constans/links';
import * as ACTIONS from 'constans/actions';

const setTransaction = (payload) => ({
  type: ACTIONS.SET_TRANSACTION,
  payload
})

export function sendHashAPI(data, resolve, setBtnStatus) {

  return (dispatch) => {
    axios({
      url: URLS.TRXID,
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      credentials: 'same-origin',
      data
    })
      .then(({ data }) => {
        dispatch(setTransaction(data))
        setBtnStatus()
        resolve()
      })
      .catch(err => {
        setBtnStatus()
        return err;
      })
  }

}