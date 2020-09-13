import { combineReducers } from 'redux';
import nameGenReducer from './nameGenReducer';

export default combineReducers({
    nameGenReducer: nameGenReducer
})