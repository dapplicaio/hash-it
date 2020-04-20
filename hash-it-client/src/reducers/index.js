import { combineReducers } from "redux";

import hashFileReducer from './hashFile'
import snackbarReducer from './snackbar'
import transactionReducer from './transaction'
import userDataReducer from './userData'

export default combineReducers({
  userDataReducer,
  hashFileReducer,
  transactionReducer,
  snackbarReducer
})