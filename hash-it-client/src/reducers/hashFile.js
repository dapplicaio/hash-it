import * as ACTIONS from 'constans/actions';

const initialState = {
  name: '',
  hash: undefined
}

export default function hashFile(state = initialState, { type, payload }) {
  if (type === ACTIONS.HASH_FILE) {
      return payload;
  }
  return state;
}