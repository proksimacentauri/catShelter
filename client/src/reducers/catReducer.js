import { FETCH_CATS } from '../actions/types';

export default function(state = [], action) {
  if (action.type === FETCH_CATS) {
    return action.payload || false;
  }
  return state;
}
