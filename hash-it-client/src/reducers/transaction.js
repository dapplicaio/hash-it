import * as ACTIONS from 'constans/actions';

const initialState = {
  transactionId: undefined
}

export default function setTransaction(state = initialState, { type, payload }) {
  if (type === ACTIONS.SET_TRANSACTION) {
      return {
        transactionId: payload.trx_id,        
      };
  }
  return state;
}