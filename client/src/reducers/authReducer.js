import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  if (action.type === FETCH_USER) {
    return action.payload || false;
  }
  return state;
}
