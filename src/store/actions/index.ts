import { v4 } from 'node-uuid';
import actionTypes from '../actionTypes';
import { saveState, loadState } from '../../utils/localStorage';
import {
  AppThunk,
  CreateContactAction,
  LikeFavoriteContactAction,
  LikeAllContactAction,
  LikePayload,
  GetAllContactAction,
  GetFavoriteContactAction,
  EditContactAction,
} from './types';
import { Contact, Payload } from '../types';

const {
  CREATE_CONTACT,
  LIKE_ALL_CONTACT,
  EDIT_CONTACT,
  GET_FAVORITE_CONTACT,
  GET_ALL_CONTACTS,
  LIKE_FAVORITE_CONTACT,
} = actionTypes;

const getAllContactsAction = (payload: Contact[]): GetAllContactAction => ({
  type: GET_ALL_CONTACTS,
  payload,
});

export const getAllContacts = (): AppThunk => {
  return (dispatch, getState): {} => {
    const payload = loadState('contact') ? loadState('contact') : getState().contacts;
    return dispatch(getAllContactsAction(payload));
  };
};

const createContactAction = (payload: Contact): CreateContactAction => ({
  type: CREATE_CONTACT,
  payload,
});

export const createContact = (contact: Payload): AppThunk => {
  return (dispatch, getState): void => {
    const payload = {
      id: v4(),
      contact,
      isLiked: false,
    };
    const localStore = loadState('contact') ? loadState('contact') : getState().contacts;
    localStore.push(payload);
    saveState('contact', localStore);
    dispatch(createContactAction(payload));
    return dispatch(getAllContacts());
  };
};

const likeAllContactAction = (payload: Contact[]): LikeAllContactAction => ({
  type: LIKE_ALL_CONTACT,
  payload,
});

const likeAllContactFunc = (rootState: Contact[], payload: { id: string; isLiked: boolean }): Contact[] => {
  const likedContact = rootState.map((contact: Contact) => {
    const { id, isLiked } = payload;
    if (contact.id === id) {
      contact.isLiked = !isLiked;
    }
    return contact;
  });
  return likedContact;
};

export const likeAllContacts = (payload: { id: string; isLiked: boolean }): AppThunk => {
  return (dispatch, getState): void => {
    const likedContact = likeAllContactFunc(getState().contacts, payload);
    saveState('contact', likedContact);
    const favContact = likedContact.filter((contact: Contact) => {
      if (contact.isLiked) {
        return contact;
      }
    });
    saveState('favorite', favContact);
    dispatch(likeAllContactAction(likedContact));
    return dispatch(getAllContacts());
  };
};

const getFavoriteContactAction = (payload: Contact[]): GetFavoriteContactAction => ({
  type: GET_FAVORITE_CONTACT,
  payload,
});

export const getFavouriteContacts = (): AppThunk => {
  return (dispatch, getState): GetFavoriteContactAction => {
    const payload = loadState('favorite') ? loadState('favorite') : getState().favorites;
    return dispatch(getFavoriteContactAction(payload));
  };
};

const likeFavoriteContactAction = (payload: Contact[]): LikeFavoriteContactAction => ({
  type: LIKE_FAVORITE_CONTACT,
  payload,
});

export const likeFavoriteContacts = (payload: { id: string; isLiked: boolean }): AppThunk => {
  return (dispatch): void => {
    const likedContact = likeAllContactFunc(loadState('contact'), payload);
    saveState('contact', likedContact);
    const favoriteContact = loadState('favorite').filter((contact: Contact) => {
      const { id } = payload;
      if (contact.id !== id) {
        return contact;
      }
    });
    saveState('favorite', favoriteContact);
    dispatch(likeFavoriteContactAction(favoriteContact));
    return dispatch(getFavouriteContacts());
  };
};

const editContactAction = (payload: Contact[]): EditContactAction => ({
  type: EDIT_CONTACT,
  payload,
});

const editContactFunc = (rootState: Contact[], payload: LikePayload): Contact[] => {
  const editedContact = rootState.map((contact: Contact) => {
    if (contact.id === payload.id) {
      contact.contact.name = payload.input.name;
      contact.contact.email = payload.input.email;
      contact.contact.phone = payload.input.phone;
    }
    return contact;
  });
  return editedContact;
};

export const editContact = (payload: LikePayload): AppThunk => {
  return (dispatch, getState): EditContactAction => {
    const editedContact = editContactFunc(getState().contacts, payload);
    const editedFavContact = editContactFunc(getState().favorites, payload);
    saveState('contact', editedContact);
    saveState('favorite', editedFavContact);
    return dispatch(editContactAction(editedContact));
  };
};
