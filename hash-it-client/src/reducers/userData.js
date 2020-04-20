import * as ACTIONS from 'constans/actions';

const initialState = {
  fullName: '',
  email: '',
  hash: undefined,
  valid: false,
}

export default function UserData(state = initialState, { type, payload }) {
  if (type === ACTIONS.HASH_USER_DATA) {
      return payload;
  }
  return state;
}