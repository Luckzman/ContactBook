import { v4 } from 'node-uuid';
import actionTypes from '../actionTypes';
import { saveState, loadState } from '../../utils/localStorage';

const { CREATE_CONTACT, GET_ALL_CONTACTS } = actionTypes;
let localStore: any;
export const createContact = (contact: {}): {} => {
  return (dispatch: any, getState: any): {} => {
    const payload = {
      id: v4(),
      contact,
    };
    localStore = loadState() ? loadState() : getState().contacts;
    localStore.push({ ...payload });
    saveState(localStore);
    return dispatch({
      type: CREATE_CONTACT,
      payload,
    });
  };
};

export const getAllContacts = (): {} => {
  const payload = loadState();
  return (dispatch: any, getState: any): {} => {
    console.log(getState().contacts, 'getState');
    return dispatch({
      type: GET_ALL_CONTACTS,
      payload,
    });
  };
};
