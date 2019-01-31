import axios from 'axios';
import { FETCH_USER, FETCH_CATS, FETCH_CAT } from './types';

export const fetchUser = () =>  async dispatch => {
  const res = await axios.get('/api/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCats = () => async dispatch => {
 const res = await axios.get('/api/cats');
 dispatch({type: FETCH_CATS, cats: res.data});
};

export const fetchCat = (id) => async dispatch => {
  const res = await axios.get('/api/cats/'+id);
  console.log(res);
  dispatch({type: FETCH_CAT, cat: res.data});
 };