import { v4 } from 'node-uuid';
import actionTypes from '../actionTypes';
import { saveState, loadState } from '../../utils/localStorage';

const {
  CREATE_CONTACT,
  LIKE_ALL_CONTACT,
  EDIT_CONTACT,
  GET_FAVORITE_CONTACT,
  GET_ALL_CONTACTS,
  LIKE_FAVORITE_CONTACT,
} = actionTypes;

export const getAllContacts = (): {} => {
  const payload = loadState('contact');
  return (dispatch: any, getState: any): {} => {
    return dispatch({
      type: GET_ALL_CONTACTS,
      payload,
    });
  };
};

export const createContact = (contact: {}): {} => {
  return (dispatch: any, getState: any): {} => {
    const payload = {
      id: v4(),
      contact,
      isLiked: false,
    };
    const localStore = loadState('contact') ? loadState('contact') : getState().contacts;
    localStore.push({ ...payload });
    saveState('contact', localStore);
    dispatch({
      type: CREATE_CONTACT,
      payload,
    });
    return dispatch(getAllContacts());
  };
};

export const likeAllContacts = (payload: { id: string; isLiked: boolean }): {} => {
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
      type: LIKE_ALL_CONTACT,
      payload: likedContact,
    });
  };
};

export const likeFavoriteContacts = (payload: { id: string; isLiked: boolean }): {} => {
  return (dispatch: any, getState: any): {} => {
    const favoriteContact = getState().favorites.filter((contact: any) => {
      const { id } = payload;
      if (contact.id !== id) {
        return contact;
      }
    });
    saveState('favorite', favoriteContact);
    return dispatch({
      type: LIKE_FAVORITE_CONTACT,
      payload: favoriteContact,
    });
  };
};

export const editContact = (payload: any): {} => {
  return (dispatch: any, getState: any): {} => {
    const editedContact = getState().contacts.map((contact: any) => {
      if (contact.id === payload.id) {
        contact.contact.name = payload.input.name;
        contact.contact.email = payload.input.email;
        contact.contact.phone = payload.input.phone;
      }
      return contact;
    });
    saveState('contact', editedContact);
    return dispatch({
      type: EDIT_CONTACT,
      payload: editedContact,
    });
  };
};

export const getFavouriteContacts = (): {} => {
  const localStore = loadState('contact');
  const favoriteContact = localStore.filter((contact: { isLiked: boolean }): {} | undefined => {
    if (contact.isLiked) {
      return contact;
    }
  });
  const contact = favoriteContact ? favoriteContact : [];
  saveState('favorite', contact);
  return (dispatch: any): void => {
    return dispatch({
      type: GET_FAVORITE_CONTACT,
      payload: contact,
    });
  };
};
