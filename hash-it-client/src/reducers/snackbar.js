import * as ACTIONS from 'constans/actions'

const initialState = {
  open: false,
  message: "",
  vertical: "top",
  horizontal: "right",
  type: "error"
}

export default function snackbar(state = initialState, { type, payload = {} }) {
  if (type === ACTIONS.SHOW_SNACKBAR) {
    return { ...initialState, ...payload };
  }
  if (type === ACTIONS.HIDE_SNACKBAR) {
    return initialState;
  }
  return state;
}