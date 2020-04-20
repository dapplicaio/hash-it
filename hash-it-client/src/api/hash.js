import * as ACTIONS from 'constans/actions';

export const hashFileAction = (payload) => ({
  type: ACTIONS.HASH_FILE,
  payload
})

export const hashUserDataAction = (payload) => ({
  type: ACTIONS.HASH_USER_DATA,
  payload
})
