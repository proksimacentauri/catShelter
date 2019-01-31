import { FETCH_CATS, FETCH_CAT } from '../actions/types';
import {updateObject} from '../utils/utility';

const initialState =  { 
  cats: [],
  cat: null
};

export default function(state = initialState, action) {
  if (action.type === FETCH_CATS) {
    return {
      ...state,
    cats: action.cats
  };
  }
  else if (action.type === FETCH_CAT)
  {
    return { ...state,
    cat: action.cat}
  }
  return state;
}
