import { v4 } from 'node-uuid';
import actionTypes from '../actionTypes';
import { saveState, loadState } from '../../utils/localStorage';

const { CREATE_CONTACT, GET_ALL_CONTACTS, LIKE_FAVORITE_CONTACT } = actionTypes;

export const createContact = (contact: {}): {} => {
  return (dispatch: any, getState: any): {} => {
    const payload = {
      id: v4(),
      contact,
      isLiked: false,
      isCreated: true,
      msg: 'Contact Created Successfully',
    };
    const localStore = loadState() ? loadState() : getState().contacts;
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
    return dispatch({
      type: GET_ALL_CONTACTS,
      payload,
    });
  };
};

export const likeFavoriteContact = (payload: { id: string; isLiked: boolean }): {} => {
  return (dispatch: any, getState: any): {} => {
    const likedContact = getState().contacts.map((contact: any) => {
      const { id, isLiked } = payload;
      if (contact.id === id) {
        contact.isLiked = !isLiked;
      }
      return contact;
    });
    saveState(likedContact);
    return dispatch({
      type: LIKE_FAVORITE_CONTACT,
      payload: likedContact,
    });
  };
};
