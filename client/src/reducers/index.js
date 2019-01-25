import {combineReducers} from 'redux';
import authReducer from './authReducer';
import catReducer from './catReducer';

export default combineReducers({
   auth: authReducer,
   cats: catReducer
});