import { combineReducers } from 'redux';
import manageQuote from './quotes';

export default combineReducers({
  quotes: manageQuote
});

//combined reducers allow us to manage parts of state one by one
//separation of concerns
