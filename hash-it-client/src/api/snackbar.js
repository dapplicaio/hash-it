import * as ACTIONS from 'constans/actions';

export const showSnackBar = (payload) => ({
  type: ACTIONS.SHOW_SNACKBAR,
  payload
})

export const hideSnackBar = () => ({
  type: ACTIONS.HIDE_SNACKBAR,
})