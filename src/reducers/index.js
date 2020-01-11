import { combineReducers } from 'redux';
import quotes from './quotes';

export default combineReducers({
  quotes
});

//combined reducers allow us to manage parts of state one by one
//separation of concerns
