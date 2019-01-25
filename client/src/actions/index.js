import axios from 'axios';
import { FETCH_USER, FETCH_CATS } from './types';

export const fetchUser = () =>  async dispatch => {
  const res = await axios.get('/api/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCats = () => async dispatch => {
 const res = await axios.get('/api/cats');
 dispatch({type: FETCH_CATS, payload: res.data});
};