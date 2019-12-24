import { v4 } from 'node-uuid';
import actionTypes from '../actionTypes';
import { saveState, loadState } from '../../utils/localStorage';

const { CREATE_CONTACT, GET_FAVORITE_CONTACT, GET_ALL_CONTACTS, LIKE_FAVORITE_CONTACT } = actionTypes;

export const createContact = (contact: {}): {} => {
  return (dispatch: any, getState: any): {} => {
    const payload = {
      id: v4(),
      contact,
      isLiked: false,
      isCreated: true,
      msg: 'Contact Created Successfully',
    };
    const localStore = loadState('contact') ? loadState('contact') : getState().contacts;
    localStore.push({ ...payload });
    saveState('contact', localStore);
    return dispatch({
      type: CREATE_CONTACT,
      payload,
    });
  };
};

export const getAllContacts = (): {} => {
  const payload = loadState('contact');
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
    saveState('contact', likedContact);
    return dispatch({
      type: LIKE_FAVORITE_CONTACT,
      payload: likedContact,
    });
  };
};

export const getFavouriteContacts = (): {} => {
  const localStore = loadState('contact');
  const favoriteContact = localStore.filter((contact: any) => contact.isLiked);
  const contact = favoriteContact ? favoriteContact : [];
  saveState('favorite', contact);
  return (dispatch: any) => {
    return dispatch({
      type: GET_FAVORITE_CONTACT,
      payload: contact,
    });
  };
};
