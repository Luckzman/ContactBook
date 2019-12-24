import { combineReducers } from 'redux';
import { contact, contacts, favorites } from './reducers';

export default combineReducers({
  contact,
  contacts,
  favorites,
});
